import { join } from 'node:path'
import { defineConfig } from 'vitest/config'

const root = (...path: string[]) => join(__dirname, ...path)
const packages = (path: string = '') => root('packages', path)

export default defineConfig({
  publicDir: false,
  test: {
    include: ['**/__tests__/**/*.test.[tj]s'],
    exclude: ['**/node_modules/**', '**/dist/**'],
    testTimeout: 20000,
    isolate: false,
    globals: true,
    environmentMatchGlobs: [
      ['packages/browser', 'jsdom'],
      ['packages/global', 'jsdom'],
      ['packages/node', 'node'],
      ['packages/test', 'node'],
    ],
  },
  esbuild: {
    target: 'node18',
  },
  resolve: {
    alias: {
      '@hhplum/utils-*': packages(),
    },
  },
})
