/*eslint-disable @typescript-eslint/ban-ts-comment*/
import { isUrl, isUrlIf } from '../URL'

describe('URL Type Assertion Functions', () => {
  // isUrl 测试
  describe('isUrl', () => {
    it('should return true for valid URLs', () => {
      expect(isUrl('https://example.com')).toBe(true)
      expect(isUrl(new URL('https://example.com'))).toBe(true)
    })

    it('should return false for invalid URLs and non-URL values', () => {
      expect(isUrl('invalid url')).toBe(false)
      // @ts-ignore
      expect(isUrl(null)).toBe(false)
      // @ts-ignore
      expect(isUrl(5)).toBe(false)
      // @ts-ignore
      expect(isUrl({})).toBe(false)
    })
  })

  // isUrlIf 测试
  describe('isUrlIf', () => {
    it('should return true for valid URLs', () => {
      expect(isUrlIf('https://example.com')).toBe(true)
      expect(isUrlIf(new URL('https://example.com'))).toBe(true)
    })

    it('should return false for invalid URLs and non-URL values', () => {
      expect(isUrlIf('invalid url')).toBe(false)
      // @ts-ignore
      expect(isUrlIf(null)).toBe(false)
      // @ts-ignore
      expect(isUrlIf(5)).toBe(false)
      // @ts-ignore
      expect(isUrlIf({})).toBe(false)
    })
  })
})
