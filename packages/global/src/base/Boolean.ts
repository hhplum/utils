import { toTypeString } from './Object'

/**
 * Whether the passed value is a boolean | 传递的值是否为布尔值
 * @param value
 */
export const isBoolean = (value: unknown): value is boolean =>
  typeof value === 'boolean'

/**
 * Returns whether the string representing this object is a boolean type string | 返回表示此对象的字符串是否是布尔值类型对应字符串
 * @param value
 */
export const isBooleanTS = (value: unknown): value is boolean =>
  toTypeString(value) === '[object Boolean]'

/**
 * Test to see if the prototype property of a constructor appears anywhere in the prototype chain of a boolean | 检测构造函数的 prototype 属性是否出现在 Boolean 实例对象的原型链上
 * @param value
 * @note Cannot be used on normal boolean values, for reasons detailed in the documentation | 不能用于普通布尔值，具体原因请参见文档
 * @docs https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean/Boolean#return_value
 */
export const isBooleanCR = (value: unknown): value is boolean =>
  value instanceof Boolean

/**
 * Whether the passed value is a truthy | 传递的值是否为真值
 * @param value
 * @alias Boolean
 * @alias toBoolean
 * @docs https://developer.mozilla.org/en-US/docs/Glossary/Truthy
 */
export const isTruthy = <T>(value: T): boolean => Boolean(value)

/**
 * Whether the passed value is a falsy | 传递的值是否为假值
 * @param value
 * @docs https://developer.mozilla.org/en-US/docs/Glossary/Falsy
 */
export const isFalsy = <T>(value: T): boolean => !isTruthy(value)

/**
 * The value passed is converted to a Boolean type | 传递的值转换为布尔值类型
 * @alias Boolean
 * @alias isTruthy
 */
export const toBoolean = isTruthy
