import { defineConfig } from 'vite';

export default defineConfig({
  base: './',
  server: {
    allowedHosts: ['.vercel.run'],
  },
  preview: {
    allowedHosts: ['.vercel.run'],
  },
  build: {
    outDir: 'dist',
  },
});
