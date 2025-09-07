/**
 *  
 * 虽然这里使用了底层构建工具的预设，但是在实际项目中能满足大量需求
 * 丰富和灵活的插件系统，使得Vite看起来整洁高效
 */

export default function removeConsolePlugin(options = {}) {
  // 默认只移除console.log
  const { methods = ['log'] } = options;

  return {
    name: 'remove-console', // 插件名称

    // 在ESBuild处理代码时调用
    esbuild: {
      jsxInject: '', // 可选：注入JSX运行时

      // 配置ESBuild的转换选项
      options: {
        // 定义要移除的console方法
        drop: methods.map(method => `console.${method}`)
      }
    },

    // 对于生产环境的额外处理（可选）
    configResolved(config) {
      if (config.mode === 'production') {
        console.log(`已启用移除console.${methods.join(', console.')}功能`);
      }
    }
  };
}
