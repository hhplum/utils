// 所有数字相关
import { typeOf } from './info'

// 原生提供
// isNaN()
// Number.isFinite() || isFinite() 【正负Infinity 或 NaN以外数字】
// Number.isInteger()【整数】

// Number.isFinite() 和全局 isFinite() 之间的不同
// isFinite会先将参数转换为数字，这意味着只有类型为数字且为有限数的值才返回 true，而非数字的值始终返回 false。
// https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number/isFinite#number.isfinite_%E5%92%8C%E5%85%A8%E5%B1%80_isfinite_%E4%B9%8B%E9%97%B4%E7%9A%84%E4%B8%8D%E5%90%8C

const common = (val: unknown, condition: boolean) => isNumber(val) && condition

export const isNumber = (val: unknown): val is number => typeOf(val, 'number')

// 小数
export const isFloat = (val: unknown): val is number =>
  common(val, !Number.isInteger(val))

// 位运算符
// 奇数【1】
export const isOdd = (val: unknown): val is number =>
  common(val, (val as number) % 2 !== 0)
// 偶数【0】
export const isEven = (val: unknown): val is number =>
  common(val, (val as number) % 2 === 0)

// 零【正负0都包含】
export const isZero = (val: unknown): val is number => common(val, val === 0)
// 正零
export const isPositiveZero = (val: unknown): val is number =>
  common(val, Object.is(val, 0))
// 负零
export const isNegativeZero = (val: unknown): val is number =>
  common(val, Object.is(val, -0))

// 正数
export const isPositiveNumber = (val: unknown): val is number =>
  common(val, Math.sign(val as number) === 1)
// 负数
export const isNegativeNumber = (val: unknown): val is number =>
  common(val, Math.sign(val as number) === -1)

// 整数
export const isInteger = (val: unknown): val is number => Number.isInteger(val)
// 正整数
export const isPositiveInteger = (val: unknown): val is number =>
  isPositiveNumber(val) && isInteger(val)
// 负整数
export const isNegativeInteger = (val: unknown): val is number =>
  isNegativeNumber(val) && isInteger(val)
