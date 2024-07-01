import type { DateInput, DateOptions } from './info'
import { DayJs } from './info'
import { date } from './date'

export interface GetUnixOptions extends DateOptions {
  /**
   * 是否返回 以秒（10位）为单位的时间戳
   * @note 默认返回毫秒（13位）
   */
  unix?: boolean
}

/**
 * 时间转时间戳
 * @param time 时间（默认当前）
 * @param options 选项
 */
export const unix = (time?: DateInput, options?: GetUnixOptions): number =>
  DayJs(date(time, options))[options?.unix ? 'unix' : 'valueOf']()
