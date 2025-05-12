import { isNull } from './null'

/**
 * plain object | 普通对象
 */
export type PlainObject<K extends PropertyKey = string, V = any> = Record<K, V>

/**
 * Returns a string representing this object | 返回表示此对象的字符串
 * @alias Object.prototype.toString
 */
export const objectToString = Object.prototype.toString

/**
 * Returns a string representing this object | 返回表示此对象的字符串
 * @param value
 */
export const toTypeString = (value: unknown): string =>
  objectToString.call(value)

/**
 * Returns a string representing this object | 返回表示此对象的字符串
 * @param value
 * @note Only the Type part of "[object Type]" | 只有 “[object Type]” 的 Type 部分
 */
export const toRawType = (value: unknown): string =>
  toTypeString(value).slice(8, -1)

/**
 * Whether the passed value is an object | 传递的值是否为对象
 * @param value
 * @note For non-primitive types only, the object type excludes null and undefined by default when strictNullChecks is turned on | 仅非原始类型，开启 strictNullChecks 时，object 类型默认排除 null 和 undefined
 */
export const isObject = (value: unknown): value is object =>
  !isNull(value) && typeof value === 'object'

/**
 * Returns whether the string representing this object is an object type string | 返回表示此对象的字符串是否是对象类型对应字符串
 * @param value
 */
export const isObjectTS = (value: unknown): value is object =>
  toTypeString(value) === '[object Object]'

/**
 * Test to see if the prototype property of a constructor appears anywhere in the prototype chain of an object | 检测构造函数的 prototype 属性是否出现在 Object 实例对象的原型链上
 * @param value
 */
export const isObjectCR = (value: unknown): value is object =>
  value instanceof Object

/**
 * Whether the passed value is a plain object | 传递的值是否为普通对象
 * @param value
 */
export const isPlainObject = (value: any): value is PlainObject => {
  let cons, prot

  if (isObjectTS(value) === false) return false

  cons = value.constructor
  if (cons === undefined) return true

  prot = cons.prototype
  if (isObject(prot) === false) return false

  if (Object.prototype.hasOwnProperty.call(prot, 'isPrototypeOf') === false) {
    return false
  }
  return true
}

const hasOwnProperty = Object.prototype.hasOwnProperty

/**
 * Checks if the object contains the specified property key | 检查对象是否包含指定的属性键
 * @param object
 * @param key
 * @note Not judging attributes in the prototype chain | 不包括原型链上的属性
 */
export const hasOwn = <O extends object, K extends PropertyKey>(
  object: O,
  key: K,
): key is K & keyof O => hasOwnProperty.call(object, key)
