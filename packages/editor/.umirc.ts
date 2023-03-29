import { defineConfig } from 'umi';
import {resolve} from 'path';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  fastRefresh: {},

});
