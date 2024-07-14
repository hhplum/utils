/**
 * 判断一个值是否为指定类型的Object
 * @param val 值
 * @param type 类型名称
 * @param constructor
 */
export const isTypeOf = (val: unknown, type: string): boolean =>
  Object.prototype.toString.call(val) === `[object ${type}]`

export const isTypeIf = (val: unknown, constructor: any): boolean =>
  val instanceof constructor

export const typeOf = (val: unknown, type: string): boolean =>
  typeof val === type

export const URLRegExp = new RegExp(
  // eslint-disable-next-line
  /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[\-;:&=\+\$,\w]+@)?[A-Za-z0-9\.\-]+|(?:www\.|[\-;:&=\+\$,\w]+@)[A-Za-z0-9\.\-]+)((?:\/[\+~%\/\.\w\-_]*)?\??(?:[\-\+=&;%@\.\w_]*)#?(?:[\.\!\/\\\w]*))?)/,
)
