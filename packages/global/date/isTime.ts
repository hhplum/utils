import type { DateInput } from './info'
import { DayJs } from './info'

/**
 * 检查时间是否合法
 * @param time 时间
 * @param format 格式
 * @param strict 是否严格
 */
export const isTime = (
  time: DateInput,
  format?: string,
  strict?: boolean,
): boolean => DayJs(time, format, strict).isValid()
