import { isNull } from './only'
import { isTypeIf, isTypeOf, typeOf } from './info'

export const isObject = (val: unknown): val is object =>
  !isNull(val) && typeOf(val, 'object')

export const isObjectIf = (val: unknown): val is object =>
  !isNull(val) && isTypeIf(val, Object)

export const isPlainObject = (val: any): val is Record<any, any> => {
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
