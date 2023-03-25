import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  resolve: {
    alias: [{ find: '@', replacement: path.resolve('src') }],
  },
  define: {
    'process.env': {},
  },
  plugins: [react(), svgr()],
  base: '/React-Project-lab5/',
  server: {
    host: 'localhost',
    port: 3000,
  },
  css: {
    devSourcemap: true,
  },
});
