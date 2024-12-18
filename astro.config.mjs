import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';

export default defineConfig({
  output: 'hybrid', 
  integrations: [tailwind(), react()],
  vite: {
    resolve: {
      alias: {
        '@': '/src', // Alias para usar rutas absolutas
      },
    },
  },
});
