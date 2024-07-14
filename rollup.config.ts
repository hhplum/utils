import { env } from 'node:process'
import { basename, join } from 'node:path'
import { builtinModules } from 'node:module'
import { readFileSync, readdirSync } from 'node:fs'
import type {
  InputOption,
  ModuleFormat,
  OutputOptions,
  Plugin,
  RollupOptions,
} from 'rollup'
import { defineConfig as _defineConfig } from 'rollup'
import json from '@rollup/plugin-json'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import type { Options as EsbuildOptions } from 'rollup-plugin-esbuild'
import esbuild from 'rollup-plugin-esbuild'
import commonjs from '@rollup/plugin-commonjs'
import dts from 'rollup-plugin-dts'

const output = './dist'

type OutputType = ('declaration' | 'prod' | 'dev')[]

interface Config {
  name: string
  format: ModuleFormat
  tsconfig: string
  pkg: Record<string, string>
  file: OutputType
}

const defineConfig = (
  name: string,
  format: ModuleFormat,
  cwd: string,
  file: OutputType = ['dev', 'prod', 'declaration'],
): Config => ({
  name,
  format,
  pkg: JSON.parse(readFileSync(join(cwd, 'package.json')).toString()),
  tsconfig: join(cwd, './tsconfig.json'),
  file,
})

const common = (input: InputOption, output: OutputOptions, plugins: Plugin[]) =>
  _defineConfig({
    cache: false,
    input,
    output: {
      sourcemap: false,
      exports: 'auto',
      preserveModules: true,
      ...output,
    },
    plugins: [...plugins, json(), nodeResolve(), commonjs()],

    external: [...builtinModules, /node_modules/, /@hhplum\/utils-global/],
  })

const esbuildPlugin = (options: EsbuildOptions) => esbuild(options)
/*
 *
 * */
const dtsPlugin = dts()

const specially = (c: Config): RollupOptions[] => {
  const { format, tsconfig, name, pkg, file } = c

  const esm = ['es', 'esm'].includes(format)

  const ext = name === 'node' && esm ? 'mjs' : 'js'

  const Input: InputOption = './src/index.ts'

  const Output = (e: string = ext): OutputOptions => ({
    dir: output,
    format,
    esModule: true,
    entryFileNames: `[name].${e}`,
    banner: `/**
* @desc ${pkg.name} v${pkg.version}
* @copyright (c) 2024-present ${pkg.author}
* @license ${pkg.license}
**/`,
  })

  const result: RollupOptions[] = []

  file.includes('dev') &&
    result.push(common(Input, Output(), [esbuildPlugin({ tsconfig })]))
  file.includes('prod') &&
    result.push(
      common(Input, Output(`prod.${ext}`), [
        esbuildPlugin({
          tsconfig,
          minify: true,
        }),
      ]),
    )
  file.includes('declaration') &&
    result.push(common(Input, Output('d.ts'), [dtsPlugin]))

  return result
}

const cwd = env.INIT_CWD as string

const pkg = basename(cwd)

let result: RollupOptions[] = []

if (readdirSync(new URL('./packages', import.meta.url)).includes(pkg)) {
  if (pkg !== 'node') result = specially(defineConfig(pkg, 'esm', cwd))
  else {
    const config: Config[] = [
      defineConfig('node', 'esm', cwd),
      defineConfig('node', 'cjs', cwd, ['dev', 'prod']),
    ]

    config.forEach(c => result.push(...specially(c)))
  }
}

export default result
