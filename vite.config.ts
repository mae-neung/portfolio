import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { DevupUI } from '@devup-ui/vite-plugin'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vitest/config'

const root = path.dirname(fileURLToPath(import.meta.url))
export default defineConfig({
  base: './',
  plugins: [react(), DevupUI({ distDir: 'node_modules/.cache/portfolio-devup', cssDir: 'node_modules/.cache/portfolio-devup/devup-ui' })],
  resolve: {
    alias: { '@': path.resolve(root, './src') },
  },
  test: {
    environment: 'jsdom',
    setupFiles: './src/test/setup.ts',
  },
})
