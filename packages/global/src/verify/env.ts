import { isNOU } from './only'
import { isNumber } from './number'
import { isString } from './string'
import { isFunction } from './function'
import { isObject } from './object'
import { isTypeOf } from './info'

export const isWindow = (val: any = globalThis): val is Window =>
  typeof globalThis !== 'undefined' && isTypeOf(val, 'Window')

export const isElement = (val: unknown): val is Element => {
  if (!isObject(val)) return false

  const tagName = (val as Element | any)?.tagName
  const nodeType = (val as Element | any)?.nodeType

  if (isNOU(tagName) || isNOU(nodeType)) return false

  if (!isString(tagName) || !isNumber(nodeType)) return false

  return isFunction((val as Element | any)?.hasAttribute)
}

export const isBrowser = (): boolean => typeof window !== 'undefined'

export const isServer = (): boolean => !isBrowser()
