import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// For a GitHub Pages repository site, set base to '/repository-name/'.
// Root deployments on Vercel, Netlify, and custom domains use '/'.
export default defineConfig({
  plugins: [react()],
  base: '/',
});
