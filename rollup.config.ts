// @ts-check
import { builtinModules, createRequire } from 'node:module'
import { fileURLToPath } from 'node:url'
import { join, resolve } from 'node:path'
import { defineConfig } from 'rollup'
import json from '@rollup/plugin-json'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import typescript from '@rollup/plugin-typescript'
import terser from '@rollup/plugin-terser'
import commonjs from '@rollup/plugin-commonjs'

/** @typedef {import('rollup').InputOption} InputOption */
/** @typedef {import('rollup').OutputOptions} OutputOptions */
/** @typedef {import('rollup').ModuleFormat} ModuleFormat */
/** @typedef {import('rollup').RollupOptions} RollupOptions */
/** @typedef {import('@rollup/plugin-typescript').RollupTypescriptOptions} RollupTypescriptOptions */

const require = createRequire(import.meta.url)
const _dirname = fileURLToPath(new URL('.', import.meta.url))

/**
 *
 * @param {string} n
 * @return {string}
 */
const packages = n => resolve(_dirname, 'packages', n, 'package.json')

const output = 'dist'

/**
 * 公共
 * @param {InputOption} input
 * @param {OutputOptions} output
 * @param {RollupTypescriptOptions} typescriptOptions
 * @return {RollupOptions}
 */
const common = (input, output, typescriptOptions) =>
  defineConfig({
    cache: false,
    // 项目入口
    input,
    // 打包后的出口和设置
    output: {
      sourcemap: false,
      exports: 'auto',
      preserveModules: true,
      ...output,
    },
    // 使用的插件
    // 注意，这里的插件使用是有顺序的，先把ts编译为js，然后查找依赖
    plugins: [typescript(typescriptOptions), json(), nodeResolve(), commonjs()],

    external: [...builtinModules, /node_modules/, /@hhplum\/utils-global/],
  })

/** @typedef {{format: ModuleFormat, name: string, tsconfig: string}} Config */

/** @type {Array<Config>} */
const config = [
  {
    format: 'esm',
    name: 'browser',
    tsconfig: 'tsconfig.web.json',
  },
  {
    format: 'esm',
    name: 'global',
    tsconfig: 'tsconfig.web.json',
  },
  {
    format: 'esm',
    name: 'node',
    tsconfig: 'tsconfig.node.json',
  },
  {
    format: 'cjs',
    name: 'node',
    tsconfig: 'tsconfig.node.json',
  },
  // {
  //   format: 'esm',
  //   name: 'test',
  //   tsconfig: 'tsconfig.node.json'
  // }
]

/** @type {Array<RollupOptions>} */
const result = []

/**
 *
 * @param {boolean} es
 * @return {import('rollup').Plugin}
 */
const terserPlugin = es =>
  terser({
    module: es,
    compress: {
      ecma: 2020,
      // drop_console: true,
      // drop_debugger: true
      pure_getters: true,
    },
    safari10: true,
  })

/**
 *
 * @param {Config} c
 * @return {Array<RollupOptions>}
 */
const specially = c => {
  const { format, tsconfig, name } = c

  const esm = ['es', 'esm'].includes(format)
  const out = `./${output}/${name}/dist`
  const root = `./packages/${name}`
  const pkg = require(packages(name))

  const ext = name === 'node' && esm ? 'mjs' : 'js'

  const Input = join(root, 'index.ts')

  const Output = {
    dir: out,
    format,
    esModule: true,
    entryFileNames: `[name].${ext}`,
    banner: `/**
* \\${pkg.name} v${pkg.version}
* @copyright (c) 2024-present 浩昊Plum
* @license MIT
**/`,
  }

  const TsConfig = {
    tsconfig: resolve('./', tsconfig),
    outputToFilesystem: false,
    compilerOptions: {
      rootDir: root,
      baseUrl: '../../',
      outDir: out,
      declarationDir: out,
    },
  }

  return [
    // 不带注释 js removeComments => 不生成dts
    common(Input, Output, {
      ...TsConfig,
      compilerOptions: {
        ...TsConfig.compilerOptions,
        removeComments: true,
        declaration: false,
      },
    }),
    common(
      Input,
      {
        ...Output,
        plugins: terserPlugin(esm),
        entryFileNames: `[name].prod.${ext}`,
      },
      TsConfig,
    ),
  ]
}

config.forEach(c => result.push(...specially(c)))

export default result
