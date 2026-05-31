// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://NaMToK19.github.io',
  base: '/Beauty_World_Nails_KA',
  vite: {
    plugins: [tailwindcss()]
  }
});