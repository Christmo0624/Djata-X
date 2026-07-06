import { defineConfig } from 'vite';

export default defineConfig({
  // Base URL pour GitHub Pages (doit correspondre exactement au nom du dépôt)
  base: '/Djata-X/',
  server: {
    port: 5173,
    host: true,
  },
});
