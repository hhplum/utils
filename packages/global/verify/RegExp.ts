import { isTypeIf, isTypeOf } from './info'

export const isRegExp = (val: unknown): val is RegExp => isTypeOf(val, 'RegExp')

export const isRegExpIf = (val: unknown): val is RegExp => isTypeIf(val, RegExp)
