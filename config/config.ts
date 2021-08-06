import { defineConfig } from 'dumi';

export default defineConfig({
  // mfsu: {},
  title: 'Vantr',
  favicon: 'https://img.yzcdn.cn/vant/logo.png',
  logo: 'https://img.yzcdn.cn/vant/logo.png',
  outputPath: 'build',
  mode: 'site',
  locales: [['zh-CN', '中文']],
  theme: {
    '@hd': '0.02rem',
  },
  targets: {
    ios: 8,
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
  // more config: https://d.umijs.org/config
});
