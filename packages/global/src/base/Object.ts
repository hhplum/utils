/**
 * PlainObject
 */
export type PlainObject<K extends PropertyKey = string, V = any> = Record<K, V>

/**
 * Object.prototype.toString
 */
export const objectToString = Object.prototype.toString
