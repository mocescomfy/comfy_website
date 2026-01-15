// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  site: process.env.SITE,
  base: process.env.BASE_PATH || (process.env.NODE_ENV === 'production' ? '/comfy_website/' : '/'),

  vite: {
    plugins: [tailwindcss()],
    server: {
      host: true,
      allowedHosts: ['host.docker.internal', 'localhost'],
    },
  },
});