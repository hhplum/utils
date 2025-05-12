import { toTypeString } from './Object'

/**
 * Whether the passed value is a symbol | 传递的值是否为 Symbol
 * @param value
 */
export const isSymbol = (value: unknown): value is symbol =>
  typeof value === 'symbol'

/**
 * Returns whether the string representing this object is a symbol type string | 返回表示此对象的字符串是否是 Symbol 类型对应字符串
 * @param value
 */
export const isSymbolTS = (value: unknown): value is symbol =>
  toTypeString(value) === '[object Symbol]'
