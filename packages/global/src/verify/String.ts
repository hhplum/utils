import { isTypeIf, isTypeOf, typeOf } from './info'

export const isString = (val: unknown): val is string => typeOf(val, 'string')

export const isStringOf = (val: unknown): val is string =>
  isTypeOf(val, 'String')

export const isStringIf = (val: unknown): val is string => isTypeIf(val, String)

export const isStringNull = (val: unknown): val is 'null' => val === 'null'

export const isStringUndefined = (val: unknown): val is 'undefined' =>
  val === 'undefined'

export const isStringTrue = (val: unknown): val is 'true' => val === 'true'

export const isStringFalse = (val: unknown): val is 'false' => val === 'false'

export const isStringBoolean = (val: unknown): val is 'true' | 'false' =>
  isStringTrue(val) || isStringFalse(val)

export const isStringNumber = (val: unknown): val is `${number}` =>
  isString(val) && /^-?\d+(?:\.\d+)?$/.test(val)
