import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { DevupUI } from '@devup-ui/vite-plugin'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vitest/config'

const root = path.dirname(fileURLToPath(import.meta.url))
const entries = [
  'index.html',
  'projects/index.html',
  'projects/ai-docs/index.html',
  'projects/devfive/index.html',
  'projects/devfive-landing/index.html',
  'projects/finance-security-intelligence/index.html',
  'projects/hankyu-plant/index.html',
  'projects/humansense/index.html',
  'projects/joara/index.html',
  'projects/matched-admin/index.html',
  'projects/ncsoft-ncdp/index.html',
  'projects/planb/index.html',
  'projects/round-table/index.html',
  'projects/seocho-family-center/index.html',
  'projects/shinhan/index.html',
  'projects/the-bridge/index.html',
]

export default defineConfig({
  base: './',
  plugins: [react(), DevupUI()],
  resolve: {
    alias: { '@': path.resolve(root, './src') },
  },
  build: {
    rollupOptions: {
      input: entries.map((entry) => path.resolve(root, entry)),
    },
  },
  test: {
    environment: 'jsdom',
    setupFiles: './src/test/setup.ts',
  },
})
