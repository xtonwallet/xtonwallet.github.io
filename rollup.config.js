import serve from 'rollup-plugin-serve';
import copy from 'rollup-plugin-copy';
import watchAssets from 'rollup-plugin-watch-assets';
import postcss from 'rollup-plugin-postcss';
import svelte from 'rollup-plugin-svelte';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';
import json from '@rollup/plugin-json';
import livereload from 'rollup-plugin-livereload';
import preprocess from 'svelte-preprocess';
import replace from '@rollup/plugin-replace';

const production = !process.env.ROLLUP_WATCH;

const config = [{
  input: 'src/landingpage.js',
  output: {
    file: 'dist/landingpage.js',
    name: 'landingpage',
    format: 'iife'
  },
  plugins: [
    svelte({
      emitCss: true,
      preprocess: preprocess()
    }),
    // add the postccs plugin
    postcss({
      extract: true,
      minimize: production,
      sourceMap: !production
    }),
    copy({
      targets: [
        { src: 'src/*.html', dest: 'dist/' },
        { src: 'src/assets', dest: 'dist/' },
        { src: 'CNAME', dest: 'dist/' },
        { src: '_config.yml', dest: 'dist/' },
        { src: 'src/robots.txt', dest: 'dist/' },
        { src: 'src/.well-known', dest: 'dist/' }
      ]
    }),
    commonjs(),
    json(),
    !production && copy({targets: [{ src: 'tools/chromereload.js', dest: 'dist/' }]}),
    !production && copy({targets: [{ src: './node_modules/livereload-js/dist/livereload.js', dest: 'dist/' }]}),
    !production && serve({open: true, contentBase: 'dist/', port: 10002}) && livereload({watch: 'dist/', verbose: false}),
    !production && watchAssets({ assets: ['src'] }),
    // If we're building for production (npm run build
    // instead of npm run dev), minify
    production && terser(),
    resolve({ browser: true, preferBuiltins: false }),
    replace({
      preventAssignment: true,
      values: {
        '__DEV_MODE__': !production
      }
    }),
  ],
  watch: {
    clearScreen: false
  }
}];

export default config;
