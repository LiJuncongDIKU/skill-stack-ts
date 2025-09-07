const parser = require('@babel/parser');
const traverse = require('@babel/traverse').default;
const generator = require('@babel/generator').default;

class RemoveConsolePlugin {
  // 插件构造函数，可选配置
  constructor(options = {}) {
    // 可以配置需要移除的console方法，默认只移除log
    this.options = {
      methods: ['log'],
      ...options
    };
  }

  apply(compiler) {
    // 当Webpack准备输出资源时触发
    compiler.hooks.emit.tapAsync('RemoveConsolePlugin', (compilation, callback) => {
      // 遍历所有输出的资源
      Object.keys(compilation.assets).forEach(assetPath => {
        // 只处理.js文件
        if (!assetPath.endsWith('.js')) {
          return;
        }

        // 获取文件内容
        const asset = compilation.assets[assetPath];
        const sourceCode = asset.source();

        try {
          // 解析代码为AST
          const ast = parser.parse(sourceCode, {
            sourceType: 'module',
            plugins: ['jsx', 'typescript'] // 支持JSX和TypeScript
          });

          // 遍历AST，移除console.log调用
          traverse(ast, {
            CallExpression(path) {
              const callee = path.node.callee;
              
              // 判断是否是console.xxx调用
              if (
                callee.type === 'MemberExpression' &&
                callee.object.type === 'Identifier' &&
                callee.object.name === 'console' &&
                callee.property.type === 'Identifier' &&
                this.options.methods.includes(callee.property.name)
              ) {
                // 移除这个调用表达式
                path.remove();
              }
            }.bind(this)
          });

          // 将处理后的AST转换回代码
          const { code } = generator(ast, {
            retainLines: true // 尽量保持原有的行号
          });

          // 更新资源内容
          compilation.assets[assetPath] = {
            source: () => code,
            size: () => code.length
          };
        } catch (error) {
          console.error(`处理文件 ${assetPath} 时出错:`, error);
        }
      });

      callback();
    });
  }
}

module.exports = RemoveConsolePlugin;
