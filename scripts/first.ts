import process from 'node:process'
import { type IndexFile, indexFile } from '@hhplum/utils-node/file/indexFile'
import { Fs } from '@hhplum/utils-node/file/info'
import { NP_BN } from '@hhplum/utils-node/path/node'
import type { Pkg } from './util'
import { devDirs, devPath } from './util'

const pkg = NP_BN(process.env.INIT_CWD as string)

if ((await devDirs()).includes(pkg as Pkg)) {
  // const excludeFun = (exclude: string[] = []) => [].concat(exclude)
  const contentFun = (path: string) =>
    [
      '// indexFile function Automatically generated',
      "// See 'scripts/first.ts' for details.",
      '// indexFile函数 自动生成',
      "// 详见'scripts/first.ts'",
    ].concat(
      path.includes('global') ? [] : ['export * from "@hhplum/utils-global";'],
    )

  const input = (
    path: string,
    output?: string,
    exclude?: string[],
  ): IndexFile => ({
    path,
    // exclude: excludeFun(exclude),
    exclude,
    output: `${path}/${output || 'index'}.ts`,
    content: contentFun(path),
    // derive: 'name',
  })

  await Fs.remove(devPath(pkg, 'dist'))
  await indexFile([input(devPath(pkg, 'src'))])
}

// process.exit()
