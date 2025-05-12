import { toTypeString } from './Object'

/**
 * Whether the passed value is a string | 传递的值是否为字符串
 * @param value
 */
export const isString = (value: unknown): value is string =>
  typeof value === 'string'

/**
 * Returns whether the string representing this object is a string type string | 返回表示此对象的字符串是否是字符串类型对应字符串
 * @param value
 */
export const isStringTS = (value: unknown): value is string =>
  toTypeString(value) === '[object String]'

/**
 * Test to see if the prototype property of a constructor appears anywhere in the prototype chain of a string | 检测构造函数的 prototype 属性是否出现在 String 实例对象的原型链上
 * @param value
 */
export const isStringCR = (value: unknown): value is string =>
  value instanceof String

/**
 * Whether the value passed is a null value in the form of a string | 传递的值是否是字符串形式的 null
 * @param value
 */
export const isStringNull = (value: unknown): value is 'null' =>
  value === 'null'

/**
 * Whether the value passed is an undefined value in the form of a string | 传递的值是否是字符串形式的 undefined
 * @param value
 */
export const isStringUndefined = (value: unknown): value is 'undefined' =>
  value === 'undefined'

/**
 * Whether the value passed is a true value in the form of a string | 传递的值是否是字符串形式的 true
 * @param value
 */
export const isStringTrue = (value: unknown): value is 'true' =>
  value === 'true'

/**
 * Whether the value passed is a false value in the form of a string | 传递的值是否是字符串形式的 false
 * @param value
 */
export const isStringFalse = (value: unknown): value is 'false' =>
  value === 'false'

/**
 * Whether the value passed is a boolean value in the form of a string | 传递的值是否为字符串布尔值
 * @param value
 */
export const isStringBoolean = (value: unknown): value is 'true' | 'false' =>
  isStringTrue(value) || isStringFalse(value)

/**
 * Whether the value passed is a number value in the form of a string | 传递的值是否是字符串形式的数字
 * @param value
 */
export const isStringNumber = (value: unknown): value is `${number}` =>
  isString(value) && /^-?\d+(?:\.\d+)?$/.test(value)
