import {
  isString,
  isStringBoolean,
  isStringFalse,
  isStringIf,
  isStringNull,
  isStringNumber,
  isStringOf,
  isStringTrue,
  isStringUndefined,
} from '../String'

describe('字符串类型检查', () => {
  describe('isString', () => {
    it('对于字符串返回true', () => {
      expect(isString('test')).toBe(true)
    })

    it('对于非字符串返回false', () => {
      expect(isString(123)).toBe(false)
      expect(isString({})).toBe(false)
      expect(isString(undefined)).toBe(false)
    })
  })

  describe('isStringOf', () => {
    it('对于字符串返回true', () => {
      expect(isStringOf(new String('test'))).toBe(true)
      expect(isStringOf('test')).toBe(true) // 注意：这可能是对设计选择的测试；如果`isTypeOf`函数将原始数据视为其对应的数据类型，那么本测试应该能通过。
    })

    it('对于非字符串返回false', () => {
      expect(isStringOf(123)).toBe(false)
      expect(isStringOf({})).toBe(false)
      expect(isStringOf(undefined)).toBe(false)
    })
  })

  describe('isStringIf', () => {
    it('对于字符串构造函数返回true', () => {
      expect(isStringIf(new String('test'))).toBe(true)
    })

    it('对于非字符串构造函数返回false', () => {
      expect(isStringIf(String)).toBe(false)
      expect(isStringIf(Number)).toBe(false)
    })
  })

  describe('isStringNull', () => {
    it('对于字符串null返回true', () => {
      expect(isStringNull('null')).toBe(true)
    })

    it('对于非字符串null返回false', () => {
      expect(isStringNull(null)).toBe(false)
    })
  })

  describe('isStringUndefined', () => {
    it('对于字符串undefined返回true', () => {
      expect(isStringUndefined('undefined')).toBe(true)
    })

    it('对于非字符串undefined返回false', () => {
      expect(isStringUndefined(undefined)).toBe(false)
    })
  })

  describe('isStringTrue', () => {
    it('对于字符串true返回true', () => {
      expect(isStringTrue('true')).toBe(true)
    })

    it('对于非字符串true返回false', () => {
      expect(isStringTrue(true)).toBe(false)
    })
  })

  describe('isStringFalse', () => {
    it('对于字符串false返回true', () => {
      expect(isStringFalse('false')).toBe(true)
    })

    it('对于非字符串false返回false', () => {
      expect(isStringFalse(false)).toBe(false)
    })
  })

  describe('isStringBoolean', () => {
    it('对于字符串true或者false返回true', () => {
      expect(isStringBoolean('true')).toBe(true)
      expect(isStringBoolean('false')).toBe(true)
    })

    it('对于非字符串true或者false返回false', () => {
      expect(isStringBoolean('test')).toBe(false)
    })
  })

  describe('isStringNumber', () => {
    it('对于字符串数字返回true', () => {
      expect(isStringNumber('123')).toBe(true)
    })

    it('对于非字符串数字返回false', () => {
      expect(isStringNumber('abc')).toBe(false)
    })
  })
})
