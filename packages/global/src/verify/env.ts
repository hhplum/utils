import { isNullOrUndefined } from './only'
import { isNumber } from './Number'
import { isString } from './String'
import { isFunction } from './Function'
import { isObject } from './Object'
import { isTypeOf } from './info'

export const isWindow = (val: any = globalThis): val is Window =>
  typeof globalThis !== 'undefined' && isTypeOf(val, 'Window')

export const isElement = (val: unknown): val is Element => {
  if (!isObject(val)) return false

  const tagName = (val as Element | any)?.tagName
  const nodeType = (val as Element | any)?.nodeType

  if (isNullOrUndefined(tagName) || isNullOrUndefined(nodeType)) return false

  if (!isString(tagName) || !isNumber(nodeType)) return false

  return isFunction((val as Element | any)?.hasAttribute)
}

export const isBrowser = (): boolean => typeof window !== 'undefined'

export const isServer = (): boolean => !isBrowser()
