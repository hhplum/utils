/**
 * Whether the passed value is a finite number | 传递的值是否为有限数
 * @alias {@link Number.isFinite}
 * @note Numbers other than positive or negative infinity or NaN | 正负 Infinity 或 NaN 以外数字
 * @note In comparison to the global isFinite() function, Number.isFinite() method doesn't first convert the parameter to a number. This means only values of the type number and are finite return true, and non-numbers always return false. | 与全局 isFinite() 函数相比，Number.isFinite() 不会先将参数转换为数字，这意味着只有类型为数字且为有限数的值才返回 true，而非数字的值始终返回 false。
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isFinite#difference_between_number.isfinite_and_global_isfinite}
 */
export const isFinite = Number.isFinite

/**
 * Whether the passed value is a NaN | 传递的值是否为 NaN
 * @alias {@link Number.isNaN}
 * @note Returns false if the input is not of the Number type. It is a more robust version of the original, global isNaN() function | 如果输入不是数字类型，则返回 false。它是全局 isNaN() 函数更健壮的版本
 */
export const isNaN = Number.isNaN

/**
 * Whether the passed value is a number | 传递的值是否为数字
 * @param value
 */
export const isNumber = (value: unknown): value is number =>
  typeof value === 'number'

/**
 * 小数
 * @param value
 */
export const isFloat = (value: unknown): value is number =>
  isFinite(value) && !isInteger(value)

/**
 * 奇数
 * @param value
 * @note 位运算实现，结果为1
 */
export const isOdd = (value: unknown): value is number =>
  isFinite(value) && ((value as number) & 1) === 1

/**
 * 偶数
 * @param value
 * @note 位运算实现，结果为0
 */
export const isEven = (value: unknown): value is number =>
  isFinite(value) && ((value as number) & 1) === 0

/**
 * 零
 * @param value
 * @note 正负0都包含
 */
export const isZero = (value: unknown): value is number =>
  isNumber(value) && value === 0

/**
 * 正零
 * @param value
 */
export const isPositiveZero = (value: unknown): value is number =>
  isNumber(value) && Object.is(value, 0)

/**
 * 负零
 * @param value
 */
export const isNegativeZero = (value: unknown): value is number =>
  isNumber(value) && Object.is(value, -0)

/**
 * 正数
 * @param value
 */
export const isPositiveNumber = (value: unknown): value is number =>
  isNumber(value) && Math.sign(value) === 1

/**
 * 负数
 * @param value
 */
export const isNegativeNumber = (value: unknown): value is number =>
  isNumber(value) && Math.sign(value) === -1

/**
 * 整数
 * @param value
 * @alias {@link Number.isInteger}
 */
export const isInteger = Number.isInteger

/**
 * 正整数
 * @param value
 */
export const isPositiveInteger = (value: unknown): value is number =>
  isPositiveNumber(value) && isInteger(value)

/**
 * 负整数
 * @param value
 */
export const isNegativeInteger = (value: unknown): value is number =>
  isNegativeNumber(value) && isInteger(value)
