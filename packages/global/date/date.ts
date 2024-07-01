import { isString } from '../verify/string'
import type { DateInput, DateOptions } from './info'
import { DayJs, dateFormat } from './info'
import { isTime } from './isTime'

/**
 * 日期时间格式化为默认格式
 * @param (time=new Date()) 时间
 * @param options 选项
 * @note 包含时间戳转时间
 */
export const date = (
  time: DateInput = new Date(),
  options?: DateOptions,
): string => {
  const { calculate, locale, format = dateFormat } = options || {}
  let out = ''
  if (isString(time) && /^[0-9.]+$/.test(time)) {
    const length = time.length
    const toFloat = (t: string) => (time = parseFloat(t))
    // 处理长度
    length === 10 && toFloat(`${time}000`)
    // 字符转换
    length >= 13 && toFloat(time)
  }

  if (isTime(time)) {
    time = DayJs(time)
    locale && (time = time.locale(locale))
    // 处理时间计算
    calculate &&
      (time = time[calculate.mode](
        calculate.confuse.num,
        calculate.confuse.unit,
      ))
    out = time.format(format)
  }
  return out
}
