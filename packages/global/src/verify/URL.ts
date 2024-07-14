import { URLRegExp, isTypeIf, isTypeOf } from './info'
import { isString } from './string'

const common = (
  val: string | URL,
  handle: Function,
  type: any,
): val is string | URL =>
  isString(val) ? URLRegExp.test(val) : handle(val, type)

export const isUrl = (val: string | URL): val is string | URL =>
  common(val, isTypeOf, 'URL')

export const isUrlIf = (val: string | URL): val is string | URL =>
  common(val, isTypeIf, URL)
