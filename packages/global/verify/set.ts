import { isTypeIf, isTypeOf } from './info'

export const isSet = (val: unknown): val is Set<any> => isTypeOf(val, 'Set')

export const isSetIf = (val: unknown): val is Set<any> => isTypeIf(val, Set)
