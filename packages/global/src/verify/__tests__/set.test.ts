import { isSet, isSetIf } from '../set'

describe('Set Type Assertion Functions', () => {
  // isSet 测试
  describe('isSet', () => {
    it('should return true for Set instances', () => {
      const set = new Set([1, 2, 3])
      expect(isSet(set)).toBe(true)
    })

    it('should return false for non-Set values', () => {
      expect(isSet(null)).toBe(false)
      expect(isSet([])).toBe(false) // Array, not a Set
      expect(isSet(5)).toBe(false)
      expect(isSet('test')).toBe(false)
      expect(isSet({})).toBe(false)
    })
  })

  // isSetIf 测试
  describe('isSetIf', () => {
    it('should return true for Set instances', () => {
      const set = new Set([1, 2, 3])
      expect(isSetIf(set)).toBe(true)
    })

    it('should return false for non-Set values', () => {
      expect(isSetIf(null)).toBe(false)
      expect(isSetIf([])).toBe(false) // Array, not a Set
      expect(isSetIf(5)).toBe(false)
      expect(isSetIf('test')).toBe(false)
      expect(isSetIf({})).toBe(false)
    })
  })
})
