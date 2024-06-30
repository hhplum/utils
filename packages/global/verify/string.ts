import { isTypeIf, isTypeOf, typeOf } from './info'

export const isString = (val: unknown): val is string => typeOf(val, 'string')

export const isStringOf = (val: unknown): val is string =>
  isTypeOf(val, 'String')

export const isStringIf = (val: unknown): val is string => isTypeIf(val, String)

export const isStringNull = (val: unknown): val is string => val === 'null'

export const isStringUndefined = (val: unknown): val is string =>
  val === 'undefined'

export const isStringTrue = (val: unknown): val is string => val === 'true'

export const isStringFalse = (val: unknown): val is string => val === 'false'

export const isStringBoolean = (val: unknown): val is string =>
  isStringTrue(val) || isStringFalse(val)

export const isStringNumber = (val: unknown): val is string =>
  !isNaN(Number(val))
