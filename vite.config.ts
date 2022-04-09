import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';
import eslintPlugin from 'vite-plugin-eslint';
import WindiCSS from 'vite-plugin-windicss';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), eslintPlugin(), WindiCSS()],
  base: './',
  resolve: {
    alias: {
      '@': resolve('./src'),
    },
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue'],
  },
});
