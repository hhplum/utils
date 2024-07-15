import { Fs } from '@hhplum/utils-node/file/info'
import { NP_JA, fileURLToPath } from '@hhplum/utils-node/path/node'
import { pkgData } from '@hhplum/utils-node/package/data'

export type Pkg = 'browser' | 'global' | 'node' | 'test'

export const root = (...path: string[]): string =>
  NP_JA(fileURLToPath(import.meta.url), '../../', ...path)

export const devPath = (...path: string[]): string => root('packages', ...path)

export const devDirs = (): Promise<Pkg[]> =>
  Fs.readdir(devPath()) as Promise<Pkg[]>

export const devPkgPath = (name: string): string =>
  devPath(name, 'package.json')

export const devPkgData = (name: string): Promise<any> =>
  pkgData(devPkgPath(name))
