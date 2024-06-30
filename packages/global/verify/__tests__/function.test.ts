/* eslint-disable @typescript-eslint/no-empty-function */
import { isFunction, isFunctionOf } from '../function'

describe('函数类型检查', () => {
  describe('isFunction', () => {
    it('对于函数值返回true', () => {
      expect(isFunction(() => {})).toBe(true)
      expect(isFunction(function test() {})).toBe(true)
    })

    it('对于非函数值返回false', () => {
      expect(isFunction(null)).toBe(false)
      expect(isFunction(123)).toBe(false)
      expect(isFunction('hello')).toBe(false)
      expect(isFunction({})).toBe(false)
    })
  })

  describe('isFunctionOf', () => {
    it('对于函数值返回true', () => {
      expect(isFunctionOf(() => {})).toBe(true)
      expect(isFunctionOf(function test() {})).toBe(true)
    })

    it('对于非函数值返回false', () => {
      expect(isFunctionOf(null)).toBe(false)
      expect(isFunctionOf(123)).toBe(false)
      expect(isFunctionOf('hello')).toBe(false)
      expect(isFunctionOf({})).toBe(false)
    })
  })
})
