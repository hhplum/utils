import { isNOU } from '../verify/only'
import { isArray } from '../verify/array'
import type { PlainObject } from '../info'

/**
 * 根据指定路径从对象中安全获取值
 * @param obj - 目标对象
 * @param path - 路径，可以是用点分隔的字符串或键数组
 * @param defaultValue - 如果路径不存在或对象为null/undefined时返回的默认值
 * @returns 路径指向的值或默认值
 */
export function get(
  obj: PlainObject | null | undefined,
  path: string | (string | number)[],
  defaultValue?: any,
): any {
  if (isNOU(obj)) return defaultValue

  const paths = isArray(path)
    ? path
    : path
        .toString()
        .split(/[.[\]]+/g)
        .filter(Boolean)

  let current = obj

  for (const key of paths) {
    current = current?.[key]
  }

  return isNOU(current) ? defaultValue : current
}
