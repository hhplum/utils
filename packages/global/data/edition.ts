/**
 * 版本操作选项
 */
export interface VersionOptions {
  /**
   * 一位有多长
   * @default 10
   */
  stage?: number
  /**
   * 每次递增值
   * @default 1
   */
  length?: number
}

/**
 * 根据现有版本号累加产生新版本号（小版本）
 * @param version 当前版本号
 * @param options 选项
 */
export const edition = (version: string, options?: VersionOptions): string => {
  let { stage, length } = options || {}
  stage = stage || 10
  length = length || 1
  // 版本号是字符串，所以要做一个转数字处理
  const V = version.split('.').map(x => +x)
  // 从最后一位计算自增，所以 i--
  for (let i = V.length - 1; i >= 0; i--) {
    // 每一节数字大于设定的值 并且 不是第一位，给前一位进 1；
    if (V[i] + 1 >= stage && i > 0) {
      V[i - 1] += length
      V[i] = 0 // 当前位从 0 计数
    } else {
      V[i] += length
      break // 结束循环
    }
  }
  // ACDN项目 内有过处理（提取 加工）

  return V.join('.')
}
