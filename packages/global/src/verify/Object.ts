import type { PlainObject } from '../base/Object'
import { isNull } from './only'
import { isTypeIf, isTypeOf, typeOf } from './info'

/**
 * 是否为对象
 * @param val
 * @note 仅非原始类型，开启 strictNullChecks 时，object 类型默认排除 null 和 undefined
 */
export const isObject = (val: unknown): val is object =>
  !isNull(val) && typeOf(val, 'object')

export const isObjectIf = (val: unknown): val is object =>
  !isNull(val) && isTypeIf(val, Object)

export const isPlainObject = (val: any): val is PlainObject => {
  let cons, prot

  const isObject = (v: any) => isTypeOf(v, 'Object')

  if (isObject(val) === false) return false

  cons = val.constructor
  if (cons === undefined) return true

  prot = cons.prototype
  if (isObject(prot) === false) return false

  if (Object.prototype.hasOwnProperty.call(prot, 'isPrototypeOf') === false) {
    return false
  }
  return true
}
