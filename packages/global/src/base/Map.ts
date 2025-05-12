import { toTypeString } from './Object'

/**
 * Returns whether the string representing this object is a map type string | 返回表示此对象的字符串是否是映射类型对应字符串
 * @param value
 * @alias isMap
 */
export const isMapTS = (value: unknown): value is Map<any, any> =>
  toTypeString(value) === '[object Map]'

/**
 * Whether the passed value is a map | 传递的值是否为映射
 * @alias isMapTS
 */
export const isMap = isMapTS

/**
 * Test to see if the prototype property of a constructor appears anywhere in the prototype chain of a map | 检测构造函数的 prototype 属性是否出现在 Map 实例对象的原型链上
 * @param value
 */
export const isMapCR = (value: unknown): value is Map<any, any> =>
  value instanceof Map
