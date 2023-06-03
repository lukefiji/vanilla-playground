import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        scaffold: resolve(__dirname, 'projects/_scaffold/index.html'),
      },
    },
  },
});
