// 转换系列
import type { PlainObject } from '../info'
import { isArray } from '../verify/array'
import { isString } from '../verify/string'

/**
 * 单个元素转换为数组
 * @param value
 */
export const toArray = <T>(value: T | T[]): T extends any[] ? T : T[] =>
  isArray(value)
    ? (value as unknown as T extends any[] ? T : T[])
    : ([value] as unknown as T extends any[] ? T : T[])

/**
 * 字符串数字转换为数字
 */
export const toNumber = <T>(val: T): T | number => {
  const num = isString(val) ? Number(val) : NaN
  return isNaN(num) ? val : num
}

/**
 * 获取对象指定字段的值
 * @param object 对象
 */
export function toVal<O extends PlainObject>(object: O): O

/**
 * 获取对象指定字段的值
 * @param object 对象
 * @param key 字段
 */
export function toVal<O extends PlainObject, K extends keyof O>(
  object: O,
  key?: K
): O[K]

export function toVal<O extends PlainObject, K extends keyof O>(
  object: O,
  key?: K
): O | O[K] {
  return key !== undefined ? object[key] : object
}

/**
 * 获取安全对象
 * @description 返回一个包含字段数组所有字段的对象
 * @param keys 字段数组
 * @param object 任何对象
 * @note 只能用于浅层不包含递归
 * @note object参数主要用于初始化字段的值
 */
export const toSafeObj = <
  K extends PropertyKey,
  O extends Partial<Record<K, any>>,
>(
  keys: K[],
  object?: O
): Partial<Record<K, O[K]>> =>
  keys.reduce(
    (acc, key) => ({ ...acc, [key]: object?.[key] }),
    {} as Partial<Record<K, O[K]>>
  )

// 待处理 可能不需要
export const toFunction = (Fn: () => any) => (): any => Fn()

// toCaseName 传入字符获取 写法名称
// toUpperCase 提取
// toLowerCase 提取

// fromCamelCase 优化完成 驼峰转...

// 自由命名法(studly/sticky caps)
// 大小写混杂 无简明规则

// 连接符 /[\/\\-_\s]+/
// 非字母数字 /[^a-zA-Z0-9]/  默认

/**
 * 自由命名法
 * @description 自定义大小与连接分隔符，无简明规则
 * @param input 字符串
 * @param callback 逻辑回调函数
 * @param split=/[^a-zA-Z0-9]/ 分割分隔符
 * @param join 连接分隔符
 */
const toCase = (
  input: string,
  callback: (value: string, index: number, array: string[]) => string,
  split: string | RegExp = /[^a-zA-Z0-9]/,
  join: string = ''
) => input.split(split).map(callback).join(join)

// 单词首字母大写
export const toCapitalize = (input: string): `${string}${string}` =>
  `${input.charAt(0).toUpperCase()}${input.slice(1).toLowerCase()}`
// 后续字母是否强制小写（考虑增加参数）

// 驼峰命名法
/**
 * 驼峰命名法
 * @description 除第一个单词外后面的单词首字母均大写，单词间无任何内容，直接连接
 * @param input 字符串
 * @param split=/[^a-zA-Z0-9]/ 分割分隔符
 */
export const toCamelCase = (input: string, split?: string | RegExp): string =>
  toCase(
    input,
    (word, index) => {
      if (index === 0) return word.toLowerCase()
      return toCapitalize(word)
    },
    split
  )
/**
 * 小驼峰命名法
 * @description 除第一个单词外后面的单词首字母均大写，单词间无任何内容，直接连接
 * @alias toCamelCase
 */
export const toLowerCamelCase = toCamelCase
/**
 * 帕斯卡命名法
 * @description 所有单词首字母都大写，单词间无任何内容，直接连接
 * @param input 字符串
 * @param split=/[^a-zA-Z0-9]/ 分割分隔符
 */
export const toPascalCase = (input: string, split?: string | RegExp): string =>
  toCase(input, toCapitalize, split)
/**
 * 大驼峰命名法
 * @description 所有单词首字母都大写，单词间无任何内容，直接连接
 * @alias toPascalCase
 */
export const toUpperCamelCase = toPascalCase

/**
 * 脊柱命名法
 * @description 所有单词的字母都小写，单词间中划线/连字符（连接符）/减号/短横线连接
 * @param input 字符串
 * @param split=/[^a-zA-Z0-9]/ 分割分隔符
 * @note 上下文不同，-符号的名称也就不同
 */
export const toSpinalCase = (input: string, split: string | RegExp): string =>
  toCase(input, word => word.toLowerCase(), split, '-')
/**
 * 肉串命名法
 * @description 所有单词的字母都小写，单词间中划线/连字符（连接符）/减号/短横线连接
 * @alias toSpinalCase
 */
export const toKebabCase = toSpinalCase
/**
 * 火车命名法
 * @description 所有单词的字母都小写，单词间中划线/连字符（连接符）/减号/短横线连接
 * @alias toSpinalCase
 */
export const toTrainCase = toSpinalCase
/**
 * 断续命名法
 * @description 所有单词的字母都小写，单词间中划线/连字符（连接符）/减号/短横线连接
 * @alias toSpinalCase
 */
export const toLispCase = toSpinalCase
/**
 * 破折号命名法
 * @description 所有单词的字母都小写，单词间中划线/连字符（连接符）/减号/短横线连接
 * @alias toSpinalCase
 */
export const toDashCase = toSpinalCase
/**
 * 连字接符命名法
 * @description 所有单词的字母都小写，单词间中划线/连字符（连接符）/减号/短横线连接
 * @alias toSpinalCase
 */
export const toHyphenCase = toSpinalCase
/**
 * 小脊柱命名法
 * @description 所有单词的字母都小写，单词间中划线/连字符（连接符）/减号/短横线连接
 * @alias toSpinalCase
 */
export const toLowerSpinalCase = toSpinalCase

/**
 * 大脊柱命名法
 * @description 所有单词的字母都大写，单词间中划线/连字符（连接符）/减号/短横线连接
 * @param input 字符串
 * @param split=/[^a-zA-Z0-9]/ 分割分隔符
 */
export const toUpperSpinalCase = (input: string, split: string | RegExp): string =>
  toCase(input, word => word.toUpperCase(), split, '-')

/**
 * 蛇形/下划线命名法
 * @description 所有单词的字母都小写，单词间下划线连接
 * @param input 字符串
 * @param split=/[^a-zA-Z0-9]/ 分割分隔符
 */
export const toSnakeCase = (input: string, split: string | RegExp): string =>
  toCase(input, word => word.toLowerCase(), split, '_')
/**
 * 小蛇形命名法
 * @description 所有单词的字母都小写，单词间下划线连接
 * @alias toSnakeCase
 */
export const toLowerSnakeCase = toSnakeCase
/**
 * 大蛇形命名法
 * @description 所有单词的字母都大写，单词间下划线连接
 * @param input 字符串
 * @param split=/[^a-zA-Z0-9]/ 分割分隔符
 */
export const toUpperSnakeCase = (input: string, split: string | RegExp): string =>
  toCase(input, word => word.toUpperCase(), split, '_')
export const toScreamingSnakeCase = (input: string, split: string | RegExp): string =>
  toCase(input, word => word.toUpperCase(), split, '_')

// Convert back to original format
export const fromCamelCase = (camelCaseStr: string, separator: string = '_'): string =>
  camelCaseStr.replace(
    /([a-z])([A-Z])/g,
    (_$0, $1, $2) => `${$1}${separator}${$2.toLowerCase()}`
  )

// const originalInput = fromCamelCase('pathFile', '/')
// console.log(originalInput) // Output: path/file
