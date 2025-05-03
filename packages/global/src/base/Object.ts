/**
 * PlainObject
 */
export type PlainObject<K extends PropertyKey = string, V = any> = Record<K, V>

/**
 * Object.prototype.toString
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
 * @note Only the Type part of "[object Type]" | 只有“[object Type]”的Type部分
 */
export const toRawType = (value: unknown): string =>
  toTypeString(value).slice(8, -1)
