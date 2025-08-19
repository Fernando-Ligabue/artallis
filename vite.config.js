import { defineConfig } from 'vite';
import plugin from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [plugin()],
    base: '/',
    resolve: {
        alias: {
          // eslint-disable-next-line no-undef
          '@': path.resolve(__dirname, 'src'),
        },
      },
    server: {
    }
})