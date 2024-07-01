import type { Dayjs as DayJS, ManipulateType } from 'dayjs'
import dayjs from 'dayjs'
import devHelper from 'dayjs/plugin/devHelper.js'
import advancedFormat from 'dayjs/plugin/advancedFormat.js'
import weekOfYear from 'dayjs/plugin/weekOfYear.js'
import weekYear from 'dayjs/plugin/weekYear.js'
import customParseFormat from 'dayjs/plugin/customParseFormat.js'
import localeData from 'dayjs/plugin/localeData.js'
import dayOfYear from 'dayjs/plugin/dayOfYear.js'
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter.js'
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore.js'
import isBetween from 'dayjs/plugin/isBetween.js'

/**
 * date 输入 类型 校验
 */
export type DateInput = string | number | Date | DayJS

/**
 * date 操作函数 单位 值 校验
 */
export interface DateUnit {
  /**
   * 值
   */
  num: number
  /**
   * 单位
   */
  unit: ManipulateType
}

/**
 * date 计算 参数结构
 */
export interface DateCalculate {
  /**
   * 操作 单位 值
   */
  confuse: DateUnit
  /**
   * 操作模式
   */
  mode: 'add' | 'subtract'
}

export interface DateOptions {
  /**
   * 返回格式
   */
  format?: string
  /**
   * 计算
   */
  calculate?: DateCalculate
  /**
   * 同 dayjs locale
   */
  locale?: string | ILocale
}

/**
 * dayjs 实例
 * @note 没有挂载任何插件
 */
export const Dayjs = dayjs

/**
 * 日期时间默认格式
 * @note 具体支持字符详见dayjs#format
 */
export const dateFormat = 'YYYY-MM-DD HH:mm:ss'

const _dayjs = dayjs

export const dayjsDevHelper = devHelper

// 加载 拓展
_dayjs.extend(localeData)
_dayjs.extend(advancedFormat)
_dayjs.extend(customParseFormat)
_dayjs.extend(weekOfYear)
_dayjs.extend(weekYear)
_dayjs.extend(dayOfYear)
_dayjs.extend(isSameOrAfter)
_dayjs.extend(isSameOrBefore)
_dayjs.extend(isBetween)

/**
 * Dayjs 实例
 * @note 已挂载部分常用插件
 */
export const DayJs = _dayjs
