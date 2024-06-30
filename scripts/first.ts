import { type IndexFile, indexFile } from '@hhplum/utils-node/file/indexFile'

const excludeFun = (exclude: string[] = []) =>
  ['node_modules', '__tests__', 'index.ts', 'package.json', 'README.md'].concat(
    exclude,
  )
const contentFun = (path: string) =>
  ['// indexFile function Automatically generated','// See \'scripts/first.ts\' for details.','// indexFile函数 自动生成','// 详见\'scripts/first.ts\''].concat(
    path.includes('global') ? [] : ['export * from "@hhplum/utils-global";'],
  )

const input = (
  path: string,
  output?: string,
  exclude?: string[],
): IndexFile => ({
  path,
  exclude: excludeFun(exclude),
  output: `./${path}/${output || 'index'}.ts`,
  content: contentFun(path),
  // derive: 'name',
})

await indexFile([
  input('packages/browser'),
  input('packages/global'),
  input('packages/node', undefined, [
    'batch',
    'compress',
    'config',
    'database',
    'git',
    'rsa',
  ]),
  input('packages/test'),
])

// process.exit()
