import { toTypeString } from './Object'

/**
 * Returns whether the string representing this object is a RegExp type string | 返回表示此对象的字符串是否是 RegExp 类型对应字符串
 * @param value
 * @alias isRegExp
 */
export const isRegExpTS = (value: unknown): value is RegExp =>
  toTypeString(value) === '[object RegExp]'

/**
 * Whether the passed value is a RegExp | 传递的值是否为 RegExp
 * @alias isRegExpTS
 */
export const isRegExp = isRegExpTS

/**
 * Test to see if the prototype property of a constructor appears anywhere in the prototype chain of a RegExp | 检测构造函数的 prototype 属性是否出现在 RegExp 实例对象的原型链上
 * @param value
 */
export const isRegExpCR = (value: unknown): value is RegExp =>
  value instanceof RegExp
