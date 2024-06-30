import { isRegExp, isRegExpIf } from '../RegExp'

describe('RegExp Type Assertion Functions', () => {
  // isRegExp 测试
  describe('isRegExp', () => {
    it('should return true for regular expressions', () => {
      expect(isRegExp(/test/)).toBe(true)
    })

    it('should return false for non-regular expressions', () => {
      expect(isRegExp(null)).toBe(false)
      expect(isRegExp('test')).toBe(false)
      expect(isRegExp(5)).toBe(false)
      expect(isRegExp({})).toBe(false)
    })
  })

  // isRegExpIf 测试
  describe('isRegExpIf', () => {
    it('should return true for regular expressions', () => {
      expect(isRegExpIf(/test/)).toBe(true)
    })

    it('should return false for non-regular expressions', () => {
      expect(isRegExpIf(null)).toBe(false)
      expect(isRegExpIf('test')).toBe(false)
      expect(isRegExpIf(5)).toBe(false)
      expect(isRegExpIf({})).toBe(false)
    })
  })
})
