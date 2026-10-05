import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Relative base so the build works on GitHub Pages (/uxuiportfolio/) and on a custom domain.
export default defineConfig({
  plugins: [react()],
  base: './',
})
