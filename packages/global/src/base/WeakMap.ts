import { toTypeString } from './Object'

/**
 * Returns whether the string representing this object is a WeakMap type string | 返回表示此对象的字符串是否是 WeakMap 类型对应字符串
 * @param value
 * @alias isWeakMap
 */
export const isWeakMapTS = (value: unknown): value is WeakMap<any, any> =>
  toTypeString(value) === '[object WeakMap]'

/**
 * Whether the passed value is a WeakMap | 传递的值是否为 WeakMap
 * @alias isWeakMapTS
 */
export const isWeakMap = isWeakMapTS

/**
 * Test to see if the prototype property of a constructor appears anywhere in the prototype chain of a WeakMap | 检测构造函数的 prototype 属性是否出现在 WeakMap 实例对象的原型链上
 * @param value
 */
export const isWeakMapCR = (value: unknown): value is WeakMap<any, any> =>
  value instanceof WeakMap
