import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

export default defineConfig({
  site: 'https://glbessa.dev',
  integrations: [react()],
  vite: {
    resolve: {
      alias: {
        '@': '/src',
      },
    },
  },
});
