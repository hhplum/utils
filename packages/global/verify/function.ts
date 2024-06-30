import { isTypeIf, isTypeOf, typeOf } from './info'

export const isFunction = (val: unknown): val is Function =>
  typeOf(val, 'function')

export const isFunctionOf = (val: unknown): val is Function =>
  isTypeOf(val, 'Function')

export const isFunctionIf = (val: unknown): val is Function =>
  isTypeIf(val, Function)
