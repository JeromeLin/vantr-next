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
  // more config: https://d.umijs.org/config
});
