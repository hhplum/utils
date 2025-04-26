/* eslint-disable @typescript-eslint/no-array-constructor */
import { isArray, isArrayIf, isArrayOf } from '../Array'

describe('数组类型检查', () => {
  describe('isArray', () => {
    it('对于数组返回true', () => {
      expect(isArray([1, 2, 3])).toBe(true)
      expect(isArray(new Array(1, 2, 3))).toBe(true)
      expect(isArray(Array(1, 2, 3))).toBe(true)
    })

    it('对于非数组返回false', () => {
      expect(isArray(123)).toBe(false)
      expect(isArray('abc')).toBe(false)
      expect(isArray({})).toBe(false)
      expect(isArray(undefined)).toBe(false)
    })
  })

  describe('isArrayOf', () => {
    it('对于数组返回true', () => {
      expect(isArrayOf([1, 2, 3])).toBe(true)
      expect(isArrayOf(new Array(1, 2, 3))).toBe(true)
      expect(isArrayOf(Array(1, 2, 3))).toBe(true)
    })

    it('对于非数组返回false', () => {
      expect(isArrayOf(123)).toBe(false)
      expect(isArrayOf('abc')).toBe(false)
      expect(isArrayOf({})).toBe(false)
      expect(isArrayOf(undefined)).toBe(false)
    })
  })

  describe('isArrayIf', () => {
    it('对于数组返回true', () => {
      expect(isArrayIf([1, 2, 3])).toBe(true)
      expect(isArrayIf(new Array(1, 2, 3))).toBe(true)
      expect(isArrayIf(Array(1, 2, 3))).toBe(true)
    })

    it('对于非数组返回false', () => {
      expect(isArrayIf(123)).toBe(false)
      expect(isArrayIf('abc')).toBe(false)
      expect(isArrayIf({})).toBe(false)
      expect(isArrayIf(undefined)).toBe(false)
    })
  })
})
