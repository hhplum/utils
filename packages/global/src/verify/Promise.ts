import { isObject, isObjectIf } from './Object'
import { isFunction, isFunctionIf } from './Function'

export const isPromise = <T = any>(val: unknown): val is Promise<T> =>
  (isObject(val) || isFunction(val)) &&
  isFunction((val as any).then) &&
  isFunction((val as any).catch)

export const isPromiseIf = <T = any>(val: unknown): val is Promise<T> =>
  (isObjectIf(val) || isFunctionIf(val)) &&
  isFunctionIf((val as any).then) &&
  isFunctionIf((val as any).catch)
