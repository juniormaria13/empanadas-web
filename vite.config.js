import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // Serve the project root as static so existing /img/ folder works
  publicDir: 'public',
});
