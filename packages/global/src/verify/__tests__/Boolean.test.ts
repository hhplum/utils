import { isBoolean, isBooleanIf, isBooleanOf } from '../Boolean'

describe('布尔类型检查', () => {
  describe('isBoolean', () => {
    it('对于布尔值返回true', () => {
      expect(isBoolean(true)).toBe(true)
      expect(isBoolean(false)).toBe(true)
    })

    it('对于非布尔值返回false', () => {
      // 此处的new为创建一个Boolean对象（最终结果是对象不是一个布尔值）
      // typeof new Boolean(true) => 'object'
      expect(isBoolean(new Boolean(true))).toBe(false)
      expect(isBoolean(new Boolean(false))).toBe(false)
      expect(isBoolean(1)).toBe(false)
      expect(isBoolean('true')).toBe(false)
    })
  })

  describe('isBooleanOf', () => {
    it('对于布尔值返回true', () => {
      expect(isBooleanOf(true)).toBe(true)
      expect(isBooleanOf(false)).toBe(true)
      // Object.prototype.toString.call(new Boolean('true')) => '[object Boolean]'
      expect(isBooleanOf(new Boolean(true))).toBe(true)
      expect(isBooleanOf(new Boolean(false))).toBe(true)
    })

    it('对于非布尔值返回false', () => {
      expect(isBooleanOf(1)).toBe(false)
      expect(isBooleanOf('true')).toBe(false)
    })
  })

  describe('isBooleanIf', () => {
    it('对于布尔值构造函数返回true', () => {
      // new Boolean(true) instanceof Boolean（成立但是内部值需要调用valueOf()才能返回）
      expect(isBooleanIf(new Boolean(true))).toBe(true)
      expect(isBooleanIf(new Boolean(false))).toBe(true)
    })

    it('对于非布尔值构造函数返回false', () => {
      expect(isBooleanIf(true)).toBe(false)
      expect(isBooleanIf(false)).toBe(false)
      expect(isBooleanIf(1)).toBe(false)
      expect(isBooleanIf('true')).toBe(false)
    })
  })
})
