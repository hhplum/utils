import { isNull } from './null'

/**
 * Primitive | 原始数据类型
 * @docs https://developer.mozilla.org/en-US/docs/Glossary/Primitive
 */
export type Primitive =
  | string
  | number
  | bigint
  | boolean
  | undefined
  | symbol
  | null

/**
 * Primitive | 原始数据类型
 * @note Doesn't contain null | 不包含 null
 */
export type PrimitiveNotNull = Exclude<Primitive, null>

/**
 * Primitive data structures string (initial capital letters) | 原始数据结构字符串（首字母大写）
 */
export type PrimitiveKeyUpper =
  | 'String'
  | 'Number'
  | 'Bigint'
  | 'Boolean'
  | 'Undefined'
  | 'Symbol'
  | 'Null'

/**
 * Primitive data structure array of strings (initial capital letters) | 原始数据结构字符串数组（首字母大写）
 */
export const primitiveKeyUpper: PrimitiveKeyUpper[] = [
  'String',
  'Number',
  'Bigint',
  'Boolean',
  'Undefined',
  'Symbol',
  'Null',
]

/**
 * Primitive data structures string (initial capital letters) | 原始数据结构字符串（首字母大写）
 * @note Doesn't contain 'Null' | 不包含 ‘Null’
 */
export type PrimitiveKeyUpperNN = Exclude<PrimitiveKeyUpper, 'Null'>

/**
 * Primitive data structure array of strings (initial capital letters) | 原始数据结构字符串数组（首字母大写）
 * @note Doesn't contain 'Null' | 不包含 ‘Null’
 */
export const primitiveKeyUpperNN: PrimitiveKeyUpperNN[] = [
  'String',
  'Number',
  'Bigint',
  'Boolean',
  'Undefined',
  'Symbol',
]

/**
 * Primitive data structures string | 原始数据结构字符串
 */
export type PrimitiveKeyLower =
  | 'string'
  | 'number'
  | 'bigint'
  | 'boolean'
  | 'undefined'
  | 'symbol'
  | 'null'

/**
 * Primitive data structure array of strings | 原始数据结构字符串数组
 */
export const primitiveKeyLower: PrimitiveKeyLower[] = [
  'string',
  'number',
  'bigint',
  'boolean',
  'undefined',
  'symbol',
  'null',
]

/**
 * Primitive data structures string | 原始数据结构字符串
 * @note Doesn't contain 'null' | 不包含 ‘null’
 */
export type PrimitiveKeyLowerNN = Exclude<PrimitiveKeyLower, 'null'>

/**
 * Primitive data structure array of strings | 原始数据结构字符串数组
 * @note Doesn't contain 'null' | 不包含 ‘null’
 */
export const primitiveKeyLowerNN: PrimitiveKeyLowerNN[] = [
  'string',
  'number',
  'bigint',
  'boolean',
  'undefined',
  'symbol',
]

/**
 * Primitive data structures string (two common forms) | 原始数据结构字符串（两种常用形式）
 */
export type PrimitiveKey = PrimitiveKeyLower | PrimitiveKeyUpper

/**
 * Primitive data structures string (two common forms) | 原始数据结构字符串（两种常用形式）
 */
export const primitiveKey: PrimitiveKey[] = [
  ...primitiveKeyLower,
  ...primitiveKeyUpper,
]

/**
 * Primitive data structures string (two common forms) | 原始数据结构字符串（两种常用形式）
 * @note Doesn't contain 'null' and 'Null' | 不包含 ‘null’ 和 ‘Null’
 */
export type PrimitiveKeyNotNull = PrimitiveKeyLowerNN | PrimitiveKeyUpperNN

/**
 * Primitive data structures string (two common forms) | 原始数据结构字符串（两种常用形式）
 * @note Doesn't contain 'null' and 'Null' | 不包含 ‘null’ 和 ‘Null’
 */
export const primitiveKeyNotNull: PrimitiveKeyNotNull[] = [
  ...primitiveKeyLowerNN,
  ...primitiveKeyUpperNN,
]

/**
 * Whether the passed value is a primitive |  传递的值是否为原始数据类型
 * @param value
 */
export const isPrimitive = (value: any): value is Primitive =>
  isNull(value) || isPrimitiveNotNull(value)

/**
 * Whether the passed value is a primitive |  传递的值是否为原始数据类型
 * @param value
 * @note Does not contain null | 不包含null
 */
export const isPrimitiveNotNull = (value: any): value is PrimitiveNotNull =>
  typeof value !== 'object'
