import { defineConfig } from 'umi';
import {resolve} from 'path';

export default defineConfig({
  mock: false,
  nodeModulesTransform: {
    type: 'none',
  },
  fastRefresh: {},
  proxy: {
    '/api': {
      'target': 'http://127.0.0.1:3000/api',
      'changeOrigin': true,
      'pathRewrite': { '^/api' : '' },
    },
  },
});
