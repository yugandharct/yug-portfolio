import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ command }) => ({
  plugins: [react()],
  // Use '/' in dev, '/yug-portfolio/' only for the production build (GitHub Pages)
  base: command === 'build' ? '/yug-portfolio/' : '/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets'
  }
}))