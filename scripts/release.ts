import {
  generateChangelog,
  logRecentCommits,
  release,
} from '@hhplum/release-scripts'
import { devDirs } from './util'

// 单个包 参考 @vitejs/release-scripts 的 scripts文件
// 多个包 参考 @vitejs/vite 的 scripts文件

const choices = await devDirs()

release({
  repo: '@hhplum/utils',
  packages: choices,
  toTag: (pkg, version) => `${pkg}@${version}`,
  logChangelog: pkg => logRecentCommits(pkg),
  generateChangelog: async pkgName => await generateChangelog(pkgName),
})
