import { Fs } from '@hhplum/utils-node/file/info'
import { NP_SA } from '@hhplum/utils-node/path/node'
import { pkgData } from '@hhplum/utils-node/package/data'

export type Pkg = 'browser' | 'global' | 'node' | 'test'

export const distPath = (...paths: any[]): string => NP_SA('dist', ...paths)

export const distPkgPath = (name: string): string => distPath(name, 'package.json')

export const distPkgData = (name: string): Promise<any> => pkgData(distPkgPath(name))

export const devPath = (...path: string[]): string => NP_SA('./packages', ...path)

export const devDir = await Fs.readdir(devPath()) as Pkg[]

export const devPkgPath = (name: string): string => devPath(name, 'package.json')

export const devPkgData = (name: string): Promise<any> => pkgData(devPkgPath(name))
