import { defineConfig } from 'dumi';

const components = [
  {
    title: '基础组件',
    children: [
      'button',
      'cell',
      'config-provider',
      'icon',
      'popup',
      'style',
      'toast',
    ],
  },
  {
    title: '反馈组件',
    children: ['loading', 'overlay'],
  },
  {
    title: '展示组件',
    children: ['badge', 'collapse', 'tag', 'scroll-number'],
  },
];

export default defineConfig({
  // mfsu: {},
  mode: 'site',
  title: 'Vantr',
  favicon: 'https://img.yzcdn.cn/vant/logo.png',
  logo: 'https://img.yzcdn.cn/vant/logo.png',
  locales: [['zh-CN', '中文']],
  outputPath: 'build',
  navs: [
    {
      title: '组件',
      path: '/components',
    },
  ],
  menus: {
    '/components': components,
  },
  styles: [
    `
  .__dumi-default-mobile-demo-layout {
    min-height: 100vh;
    background: #fff;
    padding: 0 !important;
    overflow: hidden;
    font-size: 0.26rem;
  }
  .__dumi-default-mobile-previewer {
    font-size: initial;
  }
  .__dumi-default-device-status::before {
    content: 'Vantr';
    display: inline-block;
    width: 60px;
  }
  .__dumi-default-device-status span:first-child {
    display: none;
  }
  `,
  ],
  resolve: {
    includes: ['docs', 'src'],
    passivePreview: true,
  },
  themeConfig: {
    hd: {
      rules: [],
    },
  },
});
