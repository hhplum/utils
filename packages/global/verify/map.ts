import { isTypeIf, isTypeOf } from './info'

export const isMap = (val: unknown): val is Map<any, any> =>
  isTypeOf(val, 'Map')

export const isMapIf = (val: unknown): val is Map<any, any> =>
  isTypeIf(val, Map)
