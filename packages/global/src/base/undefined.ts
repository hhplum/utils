import { toTypeString } from './Object'

/**
 * Whether the passed value is an undefined | 传递的值是否为未定义
 * @param value
 */
export const isUndefined = (value: unknown): value is undefined =>
  typeof value === 'undefined'

/**
 * Returns whether the string representing this object is an undefined type string | 返回表示此对象的字符串是否是未定义类型对应字符串
 * @param value
 */
export const isUndefinedTS = (value: unknown): value is undefined =>
  toTypeString(value) === '[object Undefined]'

/**
 * Whether the passed value is a defined | 传递的值是否为已定义的
 * @param value
 */
export const isDefined = <V = any>(value?: V): value is V =>
  typeof value !== 'undefined'
