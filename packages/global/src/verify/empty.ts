import { isString } from './String'
import { isArray } from './Array'
import { isMap } from './Map'
import { isSet } from './Set'
import { isObject } from './Object'

export const isEmpty = (val: unknown): boolean => {
  if (isArray(val) || isString(val)) return val.length === 0
  if (isMap(val) || isSet(val)) return val.size === 0
  if (isObject(val)) return Object.keys(val).length === 0
  return false
}
export const isEmptyString = (val: unknown): val is string =>
  isString(val) && val.length === 0

export const isEmptyArray = (val: any): val is Array<any> =>
  isArray(val) && val.length === 0

export const isEmptyMap = (val: unknown): val is Map<any, any> =>
  isMap(val) && val.size === 0

export const isEmptySet = (val: unknown): val is Set<any> =>
  isSet(val) && val.size === 0

export const isEmptyObject = (val: any): val is Record<any, any> =>
  isObject(val) && Object.keys(val).length === 0
