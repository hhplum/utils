import { isWindow } from '../verify/env'
import { isNumber } from '../verify/number'
import { isString } from '../verify/string'

const chars =
  '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ~!@#$%^&*()_+{}":?><;.,'.split(
    '',
  )

export type UUIDv4 = ReturnType<Crypto['randomUUID']>

/**
 * uuid v4
 */
export function randomString(): UUIDv4

/**
 * 指定长度随机字符
 * @param length 长度
 * @param radix=62 基数
 * @note 常用基数：10=>数字 16 36=>数字小写 62 85
 * @note radix参数必须为2以上的数字
 */
export function randomString(length: number, radix?: number): string

/**
 * 指定长度随机字符
 * @param length 长度
 * @param char 自定义字符集
 * @note radix参数必须为2以上的数字
 */
export function randomString(length: number, char?: string): string

export function randomString(
  length?: number,
  radix: number | string = 62,
): UUIDv4 | string {
  const result = []
  let i
  if (length && radix) {
    const s = isString(radix)
    const n = isNumber(radix)
    if ((s && radix.length > 1) || (n && radix > 1)) {
      for (i = 0; i < length; i++) {
        result[i] = (s ? radix : chars)[
          0 | (Math.random() * (n ? radix : radix.length))
        ]
      }
    } else throw new Error('参数不合理')
  } else {
    if (
      isWindow(globalThis) &&
      'crypto' in globalThis &&
      'randomUUID' in globalThis.crypto
    )
      return globalThis.crypto.randomUUID()
    else {
      let r
      result[8] = result[13] = result[18] = result[23] = '-'
      result[14] = '4'
      for (i = 0; i < 36; i++) {
        if (!result[i]) {
          r = 0 | (Math.random() * 16)
          result[i] = chars[i === 19 ? (r & 0x3) | 0x8 : r]
        }
      }
    }
  }

  return result.join('')
}

/**
 * 指定数量不重复 uuid v4
 * @param amount 数量
 */
export function randomStringArray(amount: number): UUIDv4[]

/**
 * 指定数量不重复 指定长度随机字符
 * @param amount
 * @param length 长度
 * @param radix=62 基数 (常用：10>数字 16 36>数字大写 62 85)
 * @note radix参数必须为2以上的数字
 */
export function randomStringArray(
  amount: number,
  length: number,
  radix?: number,
): string[]

/**
 * 指定数量不重复 指定长度随机字符
 * @param amount
 * @param length 长度
 * @param char 自定义字符集
 * @note char参数必须为两个以上字符
 */
export function randomStringArray(
  amount: number,
  length: number,
  char?: string,
): string[]

export function randomStringArray(
  amount: number,
  length?: number,
  radix?: number | string,
): UUIDv4[] | string[] {
  // amount 增加math.js#combination计算 小于等于计算的结果
  // 其他》超出有效范围

  const result: (UUIDv4 | string)[] = []
  for (let i = 0; i < amount; i++) {
    // @ts-ignore
    const str = randomString(length, radix) as string | UUIDv4
    result.includes(str) ? i-- : result.push(str)
  }
  return result
}
