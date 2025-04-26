import { join } from 'node:path'
import { defineConfig } from 'vitest/config'

const root = (...path: string[]) => join(__dirname, ...path)
const packages = (path: string = '') => root('packages', path)

export default defineConfig({
  publicDir: false,
  test: {
    coverage: {
      exclude: ['**/node_modules/**', '**/dist/**'],
    },
    deps: {
      moduleDirectories: ['node_modules', 'packages'],
    },
    testTimeout: 20000,
    isolate: false,
    globals: true,
    clearMocks: true,
    workspace: [
      {
        extends: true,
        test: {
          include: [
            'packages/browser/src/**/__tests__/**/*.test.[tj]s',
            'packages/global/src/**/__tests__/**/*.test.[tj]s',
          ],
          name: 'browser',
          environment: 'jsdom',
        },
      },
      {
        extends: true,
        test: {
          include: [
            'packages/node/src/**/__tests__/**/*.test.[tj]s',
            'packages/test/src/**/__tests__/**/*.test.[tj]s',
          ],
          name: 'node',
        },
      },
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
