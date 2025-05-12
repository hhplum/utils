import { toTypeString } from './Object'

/**
 * Whether the passed value is a bigint | 传递的值是否为 Bigint
 * @param value
 */
export const isBigInt = (value: unknown): value is bigint =>
  typeof value === 'bigint'

/**
 * Returns whether the string representing this object is a bigint type string | 返回表示此对象的字符串是否是 BigInt 类型对应字符串
 * @param value
 */
export const isBigIntTS = (value: unknown): value is bigint =>
  toTypeString(value) === '[object BigInt]'
