import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'  // ADD

export default defineConfig({
  plugins: [
    react(),
    ViteImageOptimizer({          // ADD
      webp: { quality: 75 },      // ADD
    }),                           // ADD
  ],
})