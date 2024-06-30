import { isTypeIf, isTypeOf, typeOf } from './info'

export const isBoolean = (val: unknown): val is boolean =>
  typeOf(val, 'boolean')

export const isBooleanOf = (val: unknown): val is boolean =>
  isTypeOf(val, 'Boolean')

/**
 * 是否是布尔构造函数的对象包装器类型
 * @param val
 * @note 不能使用在普通布尔值上，进行判断，原因详见：https://developer.mozilla.org/zh-CN/docs/web/javascript/reference/global_objects/boolean/boolean#返回值
 */
export const isBooleanIf = (val: unknown): val is boolean =>
  isTypeIf(val, Boolean)
