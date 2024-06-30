import { Fs } from '@hhplum/utils-node/file/info'
import { program } from '@hhplum/utils-node/run/program'
import type { PlainObject } from '@hhplum/utils-global/info'
import type { Pkg } from './util'
import { devDir, devPkgData, distPath } from './util'

await program('pnpm run first', [], { Exit: false })

// delete rollup cache and dist directory
await Fs.remove('./.rollup.cache')
await Fs.emptyDir(distPath())

const expFun = (name: string, format: string = 'js'): PlainObject => ({
  types: `./${name}.d.ts`,
  production: `./${name}.prod.${format}`,
  development: `./${name}.${format}`,
  default: `./${name}.${format}`
})

const handle = async (c: Pkg) => {
  // copy LICENSE
  await Fs.copy('./LICENSE', distPath(c, 'LICENSE'))

  // copy README.md
  await Fs.copy('./README.md', distPath(c, 'README.md'))

  // read package.json
  const data = await devPkgData(c)
  // change main module exports
  data['main'] = 'index.js'

  let base = expFun('index')
  let ext = 'js'
  let ex1 = expFun('*')

  switch (c) {
    case 'browser':
      base = { browser: base }
      ex1 = { browser: ex1 }
      break
    case 'global':
      break
    case 'node':
      ext = 'mjs'

      base = {
        import: expFun('index', 'mjs'),
        require: {
          types: './index.d.ts',
          node: {
            production: './index.prod.js',
            development: './index.js',
            default: './index.js'
          },
          default: './index.js'
        }
      }
      ex1 = {
        import: expFun('*', 'mjs'),
        require: {
          types: './*.d.ts',
          node: {
            production: './*.prod.js',
            development: './*.js',
            default: './*.js'
          },
          default: './*.js'
        }
      }

      // delete fields used by tsx during development
      // 删除开发时 tsx 使用的字段
      delete data['type']
      break
    case 'test':
      data['peerDependencies'] = {
        vitest: '*'
      }

      data['peerDependenciesMeta'] = {
        vitest: {
          optional: true
        }
      }
      break
  }

  data['module'] = `index.${ext}`

  data['exports'] = { '.': base, './*': ex1 }

  !('dependencies' in data) && (data['dependencies'] = {})

  const dep = (key: string, val: string) => (data['dependencies'][key] = val)

  const dev = 'devDependencies' in data ? data['devDependencies'] : {}
  Object.keys(dev).forEach(v => v.startsWith('@types/') && dep(v, dev[v]))

  delete data['devDependencies']

  // node browser add @hhplum/utils-global
  ;['node', 'browser'].includes(c) && dep('@hhplum/utils-global', '0.0.1')
  // test add @hhplum/utils-node
  ;['test'].includes(c) && dep('@hhplum/utils-node', '0.0.1')

  const pkgPath = distPath(c, 'package.json')

  await Fs.outputJSON(pkgPath, data)
  await program('pnpm exec prettier', ['--ignore-path', '--write', pkgPath], {
    Exit: false
  })
}

for (let i = 0; i < devDir.length; i++) {
  const c = devDir[i]
  await handle(c)
}
