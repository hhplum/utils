import { isTypeIf, isTypeOf } from './info'

export const isDate = (val: unknown): val is Date => isTypeOf(val, 'Date')

export const isDateIf = (val: unknown): val is Date => isTypeIf(val, Date)
