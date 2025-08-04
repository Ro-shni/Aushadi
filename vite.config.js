import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/Aushadi/'  // 👈 This is necessary for GitHub Pages
});
