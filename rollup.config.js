import { terser } from 'rollup-plugin-terser'

export default {
  input: 'src/index.js',
  output: [
    {
      file: 'dist/first_package.js',
      format: 'es',
    },
  ],
  plugins: [terser()],
}
