import { isBrowser, isElement, isServer, isWindow } from '../env'

describe('环境检查', () => {
  describe('isWindow 函数', () => {
    it('应该判断值是否为 Window 类型', () => {
      if (typeof window !== 'undefined') {
        expect(isWindow()).toBe(true)
      } else {
        expect(isWindow()).toBe(false)
      }
    })
  })

  describe('isElement 函数', () => {
    it('应该判断值是否为 Element 类型', () => {
      if (typeof document !== 'undefined') {
        const element = document.createElement('div')
        expect(isElement(element)).toBe(true)
        expect(isElement({})).toBe(false)
      }
    })
  })

  describe('isServer 和 isClient 函数', () => {
    it('应该正确识别服务器和客户端环境', () => {
      if (isWindow()) {
        expect(isServer()).toBe(false)
        expect(isBrowser()).toBe(true)
      } else {
        expect(isServer()).toBe(true)
        expect(isBrowser()).toBe(false)
      }
    })
  })
})
