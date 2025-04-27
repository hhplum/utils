import { isNull } from '../verify/only'

const objectHasOwn = Object.hasOwn

export type HasOwn = typeof objectHasOwn

export const hasOwnHandle = (): HasOwn => {
  if (objectHasOwn) {
    return objectHasOwn
  } else {
    return Object.prototype.hasOwnProperty.call as HasOwn
  }
}

/**
 * Checks if the object contains the specified property key | 检查对象是否包含指定的属性键
 * @param obj
 * @param key
 * @note 不包括原型链上的属性，in 操作符则会包括（es）
 */
export const hasOwn = <O extends object, K extends PropertyKey>(
  obj: O,
  key: K,
): key is K & keyof O => (isNull(obj) ? false : hasOwnHandle()(obj, key))
