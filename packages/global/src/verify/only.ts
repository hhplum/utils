// 无需使用new创建
import { typeOf } from './info'

export const isNull = (val: unknown): val is null => val == null

export const isUndefined = (val: unknown): val is undefined => val === undefined

export const isNullOrUndefined = (val: unknown): val is null | undefined =>
  isNull(val) || isUndefined(val)

export const isBigInt = (val: unknown): val is bigint => typeOf(val, 'bigint')

export const isSymbol = (val: unknown): val is symbol => typeOf(val, 'symbol')
