import { isTypeIf, isTypeOf } from './info'

export const isArray = (val: unknown): val is Array<any> => Array.isArray(val)

export const isArrayOf = (val: unknown): val is Array<any> =>
  isTypeOf(val, 'Array')

export const isArrayIf = (val: unknown): val is Array<any> =>
  isTypeIf(val, Array)

export const isArrayLast = (array: any[], index: number): boolean =>
  index === array.length - 1
