import { toTypeString } from './Object'

/**
 * Returns whether the string representing this object is a WeakSet type string | 返回表示此对象的字符串是否是 WeakSet 类型对应字符串
 * @param value
 * @alias isWeakSet
 */
export const isWeakSetTS = (value: unknown): value is WeakSet<any> =>
  toTypeString(value) === '[object WeakSet]'

/**
 * Whether the passed value is a WeakSet | 传递的值是否为 WeakSet
 * @alias isWeakSetTS
 */
export const isWeakSet = isWeakSetTS

/**
 * Test to see if the prototype property of a constructor appears anywhere in the prototype chain of a WeakSet | 检测构造函数的 prototype 属性是否出现在 WeakSet 实例对象的原型链上
 * @param value
 */
export const isWeakSetCR = (value: unknown): value is WeakSet<any> =>
  value instanceof WeakSet
