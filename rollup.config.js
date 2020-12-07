import { babel } from '@rollup/plugin-babel';
import nodeResolve from '@rollup/plugin-node-resolve';

const extensions = ['.ts', '.tsx'];

export default {
  input: 'src/index.tsx',
  output: {
    file: 'lib/bundle.js',
    format: 'es',
    sourcemap: true,
  },
  plugins: [
    babel({
      babelHelpers: 'runtime',
      extensions,
    }),
    nodeResolve({ extensions }),
  ],
  external: [
    'react',
    'react/jsx-runtime',
    '@emotion/css',
    '@emotion/styled',
    'axios',
    'axios-case-converter',
    'immer',
    'webfontloader',
  ],
};
