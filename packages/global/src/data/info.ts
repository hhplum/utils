import { isBooleanIf } from '../verify/Boolean'

/**
 * Boolean构造函数生成对象的简化取值
 * @param val
 */
export const booleanValue = <T>(val: T): boolean | T =>
  isBooleanIf(val) ? val.valueOf() : val
