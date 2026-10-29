import react from '@vitejs/plugin-react'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  // O GitHub Pages serve o site em /portfolio_v1/, não na raiz do domínio.
  base: process.env.GITHUB_PAGES ? '/portfolio_v1/' : '/',
  plugins: [react()],
  test: {
    environment: 'jsdom',
    setupFiles: ['./src/test/setup.ts'],
    css: { modules: { classNameStrategy: 'non-scoped' } },
  },
})
