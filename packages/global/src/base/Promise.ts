import { isObject, toTypeString } from './Object'
import { isFunction } from './Function'

/**
 * Whether the passed value is a promise | 传递的值是否为 Promise
 * @param value
 */
export const isPromise = <T = any>(value: unknown): value is Promise<T> =>
  (isObject(value) || isFunction(value)) &&
  isFunction((value as any).then) &&
  isFunction((value as any).catch)

/**
 * Returns whether the string representing this object is a promise type string | 返回表示此对象的字符串是否是 Promise 类型对应字符串
 * @param value
 */
export const isPromiseTS = <T = any>(value: unknown): value is Promise<T> =>
  toTypeString(value) === '[object Promise]'

/**
 * Test to see if the prototype property of a constructor appears anywhere in the prototype chain of a promise | 检测构造函数的 prototype 属性是否出现在 Promise 实例对象的原型链上
 * @param value
 */
export const isPromiseCR = <T = any>(value: unknown): value is Promise<T> =>
  value instanceof Promise
