// 所有数字相关

/**
 * Whether the passed value is a NaN | 传递的值是否为 NaN
 * @param value
 * @note Returns false if the input is not of the Number type. It is a more robust version of the original, global isNaN() function | 如果输入不是数字类型，则返回 false。它是全局 isNaN() 函数更健壮的版本
 */
export const isNaN = Number.isNaN
// 原生提供
// Number.isFinite() || isFinite() 【正负Infinity 或 NaN以外数字】
// Number.isInteger()【整数】

// Number.isFinite() 和全局 isFinite() 之间的不同
// isFinite会先将参数转换为数字，这意味着只有类型为数字且为有限数的值才返回 true，而非数字的值始终返回 false。
// https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number/isFinite#number.isfinite_%E5%92%8C%E5%85%A8%E5%B1%80_isfinite_%E4%B9%8B%E9%97%B4%E7%9A%84%E4%B8%8D%E5%90%8C

const common = (value: unknown, condition: boolean) =>
  isNumber(value) && condition

export const isNumber = (value: unknown): value is number =>
  typeof value === 'number'

// 小数
export const isFloat = (value: unknown): value is number =>
  common(value, !Number.isInteger(value))

// 位运算符
// 奇数【1】
export const isOdd = (value: unknown): value is number =>
  common(value, (value as number) % 2 !== 0)
// 偶数【0】
export const isEven = (value: unknown): value is number =>
  common(value, (value as number) % 2 === 0)

// 零【正负0都包含】
export const isZero = (value: unknown): value is number =>
  common(value, value === 0)
// 正零
export const isPositiveZero = (value: unknown): value is number =>
  common(value, Object.is(value, 0))
// 负零
export const isNegativeZero = (value: unknown): value is number =>
  common(value, Object.is(value, -0))

// 正数
export const isPositiveNumber = (value: unknown): value is number =>
  common(value, Math.sign(value as number) === 1)
// 负数
export const isNegativeNumber = (value: unknown): value is number =>
  common(value, Math.sign(value as number) === -1)

// 整数
export const isInteger = (value: unknown): value is number =>
  Number.isInteger(value)
// 正整数
export const isPositiveInteger = (value: unknown): value is number =>
  isPositiveNumber(value) && isInteger(value)
// 负整数
export const isNegativeInteger = (value: unknown): value is number =>
  isNegativeNumber(value) && isInteger(value)
