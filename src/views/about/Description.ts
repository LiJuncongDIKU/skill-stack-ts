import viteIcon from '@/assets/icon/vite.svg?url';
import removeLog4Webpack from '@/code4show/vite/RemoveConsolePlugin.js?raw';
import removeLog4Vite from '@/code4show/vite/vite-plugin-remove-console.js?raw';
import viteQuickImport from '@/code4show/vite/quickImport.js?raw';

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
  }
]