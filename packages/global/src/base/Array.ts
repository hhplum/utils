import { toTypeString } from './Object'

/**
 * Whether the passed value is an array | 传递的值是否为数组
 */
export const isArray = Array.isArray

/**
 * Returns whether the string representing this object is an array type string | 返回表示此对象的字符串是否是数组类型对应字符串
 * @param value
 */
export const isArrayTS = (value: unknown): value is any[] =>
  toTypeString(value) === '[object Array]'

/**
 * Test to see if the prototype property of a constructor appears anywhere in the prototype chain of an array | 检测构造函数的 prototype 属性是否出现在 Array 实例对象的原型链上
 * @param value
 */
export const isArrayCR = (value: unknown): value is Array<any> =>
  value instanceof Array

/**
 * Whether the given index is the index of the last element of the array | 给定索引是否为数组最后元素的索引
 * @param array
 * @param index
 */
export const isArrayLast = (array: any[], index: number): boolean =>
  index === array.length - 1
