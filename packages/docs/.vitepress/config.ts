import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'CodePlayground',
  description: '浏览器端进行 Web 代码的编写及运行预览',
  base: '/docs/',
  themeConfig: {
    logo: '/logo.svg',
    // https://vitepress.dev/reference/default-theme-config
    // nav: [{ text: '首页', link: '/' }],
    search: {
      provider: 'local',
    },
    outline: [2, 3],
    sidebar: [
      {
        text: '指南',
        items: [
          { text: '介绍', link: '/guide/introduction' },
          { text: '快速开始', link: '/guide/start' },
        ],
      },
      {
        text: '参考',
        items: [
          { text: '第三方依赖(importmap)', link: '/guide/importmap' },
          { text: '配置', link: '/guide/config' },
          { text: '组件式使用', link: '/reference/deploy' },
          { text: '支持语法', link: '/reference/support' },
        ],
      },
      {
        text: '更多',
        items: [{ text: '交流与反馈', link: '/more/feedback' }],
      },
    ],
    nav: [
      { text: '在线体验', link: 'https://delta-component.woa.com', target: '_blank' },
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/GolderBrother/code-playground' },
    ],
  },
  // locales: {
  //   root: {
  //     label: '简体中文',
  //     lang: 'zh',
  //   },
  //   fr: {
  //     label: 'English',
  //     lang: 'en',
  //     link: 'https://en.inspector.fe-dev.cn', // default /fr/ -- shows on navbar translations menu, can be external
  //   },
  // },
});
