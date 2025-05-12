import { isString } from './String'
import { isArray } from './Array'
import { isMap } from './Map'
import { isSet } from './Set'
import { isObject } from './Object'

/**
 * Whether the passed value is an empty | 传递的值是否为空内容
 * @param value
 */
export const isEmpty = (value: unknown): boolean => {
  if (isArray(value) || isString(value)) return value.length === 0
  if (isMap(value) || isSet(value)) return value.size === 0
  if (isObject(value)) return Object.keys(value).length === 0
  return false
}

/**
 * Whether the passed value is an empty string | 传递的值是否为空字符串
 * @param value
 */
export const isEmptyString = (value: unknown): value is string =>
  isString(value) && value.length === 0

/**
 * Whether the passed value is an empty array | 传递的值是否为空数组
 * @param value
 */
export const isEmptyArray = (value: any): value is Array<any> =>
  isArray(value) && value.length === 0

/**
 * Whether the passed value is an empty map | 传递的值是否为空映射
 * @param value
 */
export const isEmptyMap = (value: unknown): value is Map<any, any> =>
  isMap(value) && value.size === 0

/**
 * Whether the passed value is an empty set | 传递的值是否为空集合
 * @param value
 */
export const isEmptySet = (value: unknown): value is Set<any> =>
  isSet(value) && value.size === 0

/**
 * Whether the passed value is an empty object | 传递的值是否为空对象
 * @param value
 */
export const isEmptyObject = (value: any): value is Record<any, any> =>
  isObject(value) && Object.keys(value).length === 0
