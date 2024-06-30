import { join } from 'node:path'
import { defineConfig } from 'vitest/config'
import tsconfigPaths from 'vite-tsconfig-paths'

const root = (...path: string[]) => join(__dirname, ...path)
const packages = (path: string = '') => root('packages', path)

export default defineConfig({
  plugins: [tsconfigPaths()],
  test: {
    globals: true,
    environmentMatchGlobs: [
      ['packages/browser', 'jsdom'],
      ['packages/global', 'jsdom'],
      ['packages/node', 'node'],
      ['packages/test', 'node'],
    ],
    alias: {
      '@hhplum/utils-*': packages(),
    },
  },
})
