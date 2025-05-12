import { isObject, toTypeString } from './Object'
import { isNullOrUndefined } from './null'
import { isNumber } from './Number'
import { isString } from './String'
import { isFunction } from './Function'

export const isWindow = (value: any): value is Window =>
  typeof window !== 'undefined' && toTypeString(value) === '[object Window]'

export const isElement = (value: unknown): value is Element => {
  if (!isObject(value)) return false

  const tagName = (value as Element | any)?.tagName
  const nodeType = (value as Element | any)?.nodeType

  if (isNullOrUndefined(tagName) || isNullOrUndefined(nodeType)) return false

  if (!isString(tagName) || !isNumber(nodeType)) return false

  return isFunction((value as Element | any)?.hasAttribute)
}

export const isBrowser = (): boolean => typeof window !== 'undefined'

export const isServer = (): boolean => !isBrowser()
