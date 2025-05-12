import { toTypeString } from './Object'
import { isString } from './String'

/**
 * Common URL regular expressions | 常用 URL 正则表达式
 */
export const URLRegExp = new RegExp(
  // eslint-disable-next-line
  /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[\-;:&=\+\$,\w]+@)?[A-Za-z0-9\.\-]+|(?:www\.|[\-;:&=\+\$,\w]+@)[A-Za-z0-9\.\-]+)((?:\/[\+~%\/\.\w\-_]*)?\??(?:[\-\+=&;%@\.\w_]*)#?(?:[\.\!\/\\\w]*))?)/,
)

const common = (value: any, handle: Function): value is string | URL =>
  isString(value) ? URLRegExp.test(value) : handle()

/**
 * Returns whether the string representing this object is a URL type string | 返回表示此对象的字符串是否是 URL 类型对应字符串
 * @param value
 */
export const isUrlTS = (value: unknown): value is string | URL =>
  common(value, () => toTypeString(value) === '[object URL]')

/**
 * Whether the passed value is a URL | 传递的值是否为 URL
 * @param value
 */
export const isUrl = isUrlTS

/**
 * Test to see if the prototype property of a constructor appears anywhere in the prototype chain of a URL | 检测构造函数的 prototype 属性是否出现在 URL 实例对象的原型链上
 * @param value
 */
export const isUrlCR = (value: unknown): value is string | URL =>
  common(value, () => value instanceof URL)
