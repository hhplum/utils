import { toTypeString } from './Object'

/**
 * Returns whether the string representing this object is a set type string | 返回表示此对象的字符串是否是集合类型对应字符串
 * @param value
 * @alias isSet
 */
export const isSetTS = (value: unknown): value is Set<any> =>
  toTypeString(value) === '[object Set]'

/**
 * Whether the passed value is a set | 传递的值是否为集合
 * @alias isDateTS
 */
export const isSet = isSetTS

/**
 * Test to see if the prototype property of a constructor appears anywhere in the prototype chain of a set | 检测构造函数的 prototype 属性是否出现在 Set 实例对象的原型链上
 * @param value
 */
export const isSetCR = (value: unknown): value is Set<any> =>
  value instanceof Set
