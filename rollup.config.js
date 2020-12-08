import { isAbsolute } from 'path';
import { babel } from '@rollup/plugin-babel';
import nodeResolve from '@rollup/plugin-node-resolve';

const extensions = ['.ts', '.tsx'];

export default {
  input: 'src/index.tsx',
  output: {
    file: 'lib/index.js',
    format: 'es',
    preferConst: true,
    sourcemap: true,
  },
  plugins: [
    babel({
      babelHelpers: 'runtime',
      extensions
    }),
    nodeResolve({ extensions }),
  ],
  external: id => !id.startsWith('.') && !isAbsolute(id),
};
