import typescript from '@rollup/plugin-typescript';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

export default {
  input: 'src/index.ts',
  output: [
    {
      file: 'dist/index.cjs.js',
      format: 'cjs', // CommonJS
    },
    {
      file: 'dist/index.esm.js',
      format: 'esm', // ES Module
    },
  ],
  plugins: [
    typescript({
      tsconfig: './tsconfig.json',
      declaration: true, // Generate .d.ts files
      declarationDir: 'dist/types',
    }),
    resolve(),
    commonjs(),
  ],
};
