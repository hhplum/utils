import { toTypeString } from './Object'

/**
 * Whether the passed value is a function | 传递的值是否为函数
 * @param value
 */
export const isFunction = <V extends Function>(value: unknown): value is V =>
  typeof value === 'function'

/**
 * Returns whether the string representing this object is a function type string | 返回表示此对象的字符串是否是函数类型对应字符串
 * @param value
 */
export const isFunctionTS = <V extends Function>(value: unknown): value is V =>
  toTypeString(value) === '[object Function]'

/**
 * Test to see if the prototype property of a constructor appears anywhere in the prototype chain of a function | 检测构造函数的 prototype 属性是否出现在 Function 实例对象的原型链上
 * @param value
 */
export const isFunctionCR = <V extends Function>(value: unknown): value is V =>
  value instanceof Function
