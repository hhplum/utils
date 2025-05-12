import { toTypeString } from './Object'

/**
 * Returns whether the string representing this object is a date type string | 返回表示此对象的字符串是否是 Date 类型对应字符串
 * @param value
 * @alias isDate
 */
export const isDateTS = (value: unknown): value is Date =>
  toTypeString(value) === '[object Date]'

/**
 * Whether the passed value is a date | 传递的值是否为 Date
 * @alias isDateTS
 */
export const isDate = isDateTS

/**
 * Test to see if the prototype property of a constructor appears anywhere in the prototype chain of a date | 检测构造函数的 prototype 属性是否出现在 Date 实例对象的原型链上
 * @param value
 */
export const isDateCR = (value: unknown): value is Date => value instanceof Date
