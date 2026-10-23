import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { DevupUI } from '@devup-ui/vite-plugin'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vitest/config'
import type { Plugin } from 'vite'
import { renderDocument } from './src/document.ts'

const root = path.dirname(fileURLToPath(import.meta.url))

function documentShell(): Plugin {
  return {
    name: 'portfolio-document-shell',
    apply: 'serve',
    configureServer(server) {
      server.middlewares.use(async (request, response, next) => {
        if (request.method !== 'GET' || !request.headers.accept?.includes('text/html')) return next()
        const pathname = new URL(request.url ?? '/', 'http://localhost').pathname
        if (/\.[a-z0-9]+$/i.test(pathname) && !pathname.endsWith('/index.html')) return next()
        try {
          const shell = renderDocument({
            title: '이강욱 — Frontend Developer',
            description: 'React·Next.js 프론트엔드 개발자 이강욱의 프로젝트 포트폴리오',
            entryScript: '/src/main.tsx',
          })
          const html = await server.transformIndexHtml(pathname, shell)
          response.statusCode = 200
          response.setHeader('Content-Type', 'text/html; charset=utf-8')
          response.end(html)
        } catch (error) { next(error) }
      })
    },
  }
}

export default defineConfig({
  base: './',
  plugins: [react(), DevupUI({ distDir: 'node_modules/.cache/portfolio-devup', cssDir: 'node_modules/.cache/portfolio-devup/devup-ui' }), documentShell()],
  resolve: {
    alias: { '@': path.resolve(root, './src') },
  },
  build: {
    manifest: true,
    rollupOptions: { input: path.resolve(root, 'src/main.tsx') },
  },
  test: {
    environment: 'jsdom',
    setupFiles: './src/test/setup.ts',
  },
})
