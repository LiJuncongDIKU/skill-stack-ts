import viteIcon from '@/assets/icon/vite.svg?url';
// import fileIcon from '@/assets/icon/file.svg?url';
import nodejsIcon from '@/assets/icon/nodejs.svg?url';
import vueIcon from '@/assets/icon/vue.svg?url';
import serverIcon from '@/assets/icon/server.svg?url';
import removeLog4Webpack from '@/code4show/vite/RemoveConsolePlugin.js?raw';
import removeLog4Vite from '@/code4show/vite/vite-plugin-remove-console.js?raw';
import viteQuickImport from '@/code4show/vite/quickImport.js?raw';
import indexHtml from '@/code4show/framework/index.html?raw';
import appMain from '@/code4show/framework/main.ts?raw';
import viteConfig from '@/code4show/framework/vite.config.ts?raw';

export type codeFile = {
  name: string;
  content: string;
  lang?: string,
}
export type codeTag = {
  name: string;
  code: codeFile[]
}
export type desc = {
  title: string;
  desc: string;
  icon: string;
  tags?: codeTag[],
}

export const descriptionsList: desc[] = [
  {
    title: 'Vite',
    desc: '一款前端项目构建工具，非常流行。使用Rollup打包，速度快。开始时使用原生ES模块，无需额外编译，使得HMR热模块替换非常快。Vite的插件生态也非常丰富，自定义插件也非常简单。',
    icon: viteIcon,
    tags: [
      {
        name: '与webpack对比的自定义插件',
        code: [
          { content: removeLog4Webpack, name: 'Webpack打包时去除log' },
          { content: removeLog4Vite, name: 'Vite打包时去除log' },
        ],
      },
      {
        name: '快速的静态资源和Worker加载',
        code: [
          { name: '静态资源加载', content: viteQuickImport },
        ]
      }
    ]
  }, {
    title: '包管理工具和运行',
    desc: '原始的构建工具结构应该只需要一个index.html文件和一个入口js文件。这可以说是任何前端工程基础中的基础。在构建工具的支持下，可以将组件的模板、脚本和样式封装在一个或多个文件中。这使得开发和管理代码更加高效。在node和Vite的支持下，这三个文件构建出一个真正的空项目。',
    icon: nodejsIcon,
    tags: [
      {
        name: '从零开始理解',
        code: [
          { content: indexHtml, name: 'index.html' },
          { content: appMain, name: 'main.ts' },
          { content: viteConfig, name: 'vite.config.ts' }
        ],
      },
    ]
  },
  {
    title: 'Vue3',
    desc: '相较于React，个人更喜欢SFC (Single File Component) 单文件组件的风格。在常见的业务系统中，双向绑定对于表单的处理非常方便。自定义组件方面，defineModel的开放更是升级了体验',
    icon: vueIcon,
    tags: [
      // {
      //   name: '从零开始理解',
      //   code: [
      //     { content: indexHtml, name: 'index.html' },
      //     { content: appMain, name: 'main.ts' },
      //     { content: viteConfig, name: 'vite.config.ts' }
      //   ],
      // },
    ]
  },
  {
    title: "api二封",
    desc: "基于axios的基础上，对自身业务的部分定制化操作进行二封，可以非常高效地处理接口调用这是工程化的重要一步。首先，创建独立的axios实例，这在后台分服务管理api时非常有用；第二步，封装自定义返回方法，主要是为同一个业务模块的apis作前端的分组；第三步，定义接口和调用。",
    icon: serverIcon,
    tags: [
      {
        name:'独立的Axios实例',
        code: [
          {}
        ]
      }
    ]
  }
]