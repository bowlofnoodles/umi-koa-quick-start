import { defineConfig } from 'umi';

// 优先级更高
export default defineConfig({
  layout: {},
  dynamicImport: {},
  nodeModulesTransform: {
    type: 'none',
  },
  hash: true,
  publicPath: '/static/',
  routes: [
    { path: '/', component: '@/pages/Home/index' },
    { path: '/user', component: '@/pages/User/index' },
  ],
  fastRefresh: {},
  proxy: {
    '/apis': {
      target: 'http://localhost:3456',
      changeOrigin: true,
    },
  },
});
