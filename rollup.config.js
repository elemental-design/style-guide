import json from '@rollup/plugin-json';
import resolve from '@rollup/plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import commonjs from '@rollup/plugin-commonjs';

import packageJson from './package.json';

const getPlugins = (platform) => [
  json(),
  babel({
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.es6', '.es', '.mjs'],
    exclude: 'node_modules/**',
  }),
  resolve({
    extensions: ['.mjs', `.${platform}.js`, `.${platform}.jsx`, `.${platform}.ts`, `.${platform}.tsx`, '.js', '.ts', '.jsx', '.tsx', '.json'],
  }),
  commonjs(),
];

const baseOutput = {
  // file: 'dist/bundle.esm.js',
  file: packageJson.main,
  format: 'esm',
  name: packageJson.name,
  globals: {
    react: 'React',
    'react-dom': 'ReactDOM',
    'styled-components': 'styled',
  },
  // plugins: getPlugins('web'),
};

export default [
  // Sketch export
  {
    input: 'src/index.ts',
    output: {
      ...baseOutput,
      file: packageJson.sketch,
    },
    external: ['react', 'react-native-web', 'react-dom', 'react-is', 'styled-components', 'styled-system', 'elemental-react', 'react-primitives', 'react-primitives-svg'],
    plugins: getPlugins('sketch')
  }
];
