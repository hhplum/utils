import { toTypeString } from './Object'
import { isUndefined, isUndefinedTS } from './undefined'

/**
 * Whether the passed value is a null | 传递的值是否为 null
 * @param value
 */
export const isNull = (value: unknown): value is null => value === null

/**
 * Returns whether the string representing this object is a null type string | 返回表示此对象的字符串是否是 null 类型对应字符串
 * @param value
 */
export const isNullTS = (value: unknown): value is null =>
  toTypeString(value) === '[object Null]'

/**
 * Whether the value passed is null or undefined | 传递的值是否为 null 或者未定义
 * @param value
 */
export const isNullOrUndefined = (value: unknown): value is null | undefined =>
  isNull(value) || isUndefined(value)

/**
 * Returns a string indicating whether the object is null or undefined. | 返回表示此对象的字符串是否是 null 或者未定义类型对应字符串
 * @param value
 */
export const isNullOrUndefinedTS = (
  value: unknown,
): value is null | undefined => isNullTS(value) || isUndefinedTS(value)
