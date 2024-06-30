import { isObject, isObjectIf, isPlainObject } from '../object'

describe('对象类型检查', () => {
  describe('isObject', () => {
    it('对于对象返回true', () => {
      expect(isObject({})).toBe(true)
      expect(isObject(new Date())).toBe(true) // Date is an object too
    })

    it('对于非对象返回false', () => {
      expect(isObject(null)).toBe(false)
      expect(isObject(5)).toBe(false)
      expect(isObject('hello')).toBe(false)
    })
  })

  describe('isObjectIf', () => {
    it('对于对象返回true', () => {
      expect(isObjectIf({})).toBe(true)
      expect(isObjectIf(new Date())).toBe(true)
    })

    it('对于非对象返回false', () => {
      expect(isObjectIf(null)).toBe(false)
      expect(isObjectIf(5)).toBe(false)
      expect(isObjectIf('hello')).toBe(false)
    })
  })

  describe('isPlainObject', () => {
    it('对于纯对象返回true', () => {
      expect(isPlainObject({})).toBe(true)
    })

    it('对于非纯对象返回false', () => {
      expect(isPlainObject(undefined)).toBe(false)
      expect(isPlainObject(null)).toBe(false)
      expect(isPlainObject(5)).toBe(false)
      expect(isPlainObject('hello')).toBe(false)
      expect(isPlainObject(new Date())).toBe(false)
    })
  })
})
