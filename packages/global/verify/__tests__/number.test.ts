import {
  isEven,
  isFloat,
  isInteger,
  isNegativeInteger,
  isNegativeNumber,
  isNegativeZero,
  isNumber,
  isOdd,
  isPositiveInteger,
  isPositiveNumber,
  isPositiveZero,
  isZero,
} from '../number'

describe('数字类型检查', () => {
  describe('isNumber', () => {
    it('对于数字返回true', () => {
      expect(isNumber(42)).toBe(true)
      expect(isNumber(-10.5)).toBe(true)
    })

    it('对于非数字返回false', () => {
      expect(isNumber('42')).toBe(false)
      expect(isNumber(null)).toBe(false)
    })
  })

  describe('isFloat', () => {
    it('对于小数返回true', () => {
      expect(isFloat(3.14)).toBe(true)
      expect(isFloat(-0.1)).toBe(true)
    })

    it('对于非小数返回false', () => {
      expect(isFloat(42)).toBe(false)
      expect(isFloat(-10)).toBe(false)
    })
  })

  describe('isOdd', () => {
    it('对于奇数返回true', () => {
      expect(isOdd(1)).toBe(true)
      expect(isOdd(-1)).toBe(true)
      expect(isOdd(99)).toBe(true)
    })

    it('对于偶数返回false', () => {
      expect(isOdd(0)).toBe(false)
      expect(isOdd(2)).toBe(false)
      expect(isOdd(100)).toBe(false)
    })

    it('对于非数字类型返回错误', () => {
      expect(isOdd('odd')).toBe(false)
      expect(isOdd(true)).toBe(false)
      expect(isOdd({})).toBe(false)
    })
  })

  describe('isEven', () => {
    it('对于偶数返回true', () => {
      expect(isEven(0)).toBe(true)
      expect(isEven(2)).toBe(true)
      expect(isEven(100)).toBe(true)
    })

    it('对于奇数返回false', () => {
      expect(isEven(1)).toBe(false)
      expect(isEven(-1)).toBe(false)
      expect(isEven(99)).toBe(false)
    })

    it('对于非数字类型返回错误', () => {
      expect(isEven('even')).toBe(false)
      expect(isEven(false)).toBe(false)
      expect(isEven({})).toBe(false)
    })
  })

  describe('isZero', () => {
    it('对于0返回true', () => {
      expect(isZero(0)).toBe(true)
      expect(isZero(-0)).toBe(true)
    })

    it('对于非0返回false', () => {
      expect(isZero(1)).toBe(false)
      expect(isZero(-1)).toBe(false)
      expect(isZero(NaN)).toBe(false)
      expect(isZero(Infinity)).toBe(false)
      expect(isZero(-Infinity)).toBe(false)
    })

    it('对于非数字返回false', () => {
      expect(isZero('0')).toBe(false)
      expect(isZero(null)).toBe(false)
      expect(isZero(undefined)).toBe(false)
      expect(isZero({})).toBe(false)
    })
  })

  describe('isPositiveZero', () => {
    it('对于正0返回true', () => {
      expect(isPositiveZero(0)).toBe(true)
    })

    it('对于非正0返回false', () => {
      expect(isPositiveZero(-0)).toBe(false)
      expect(isPositiveZero(1)).toBe(false)
      expect(isPositiveZero(-1)).toBe(false)
      expect(isPositiveZero(NaN)).toBe(false)
      expect(isPositiveZero(Infinity)).toBe(false)
      expect(isPositiveZero(-Infinity)).toBe(false)
    })

    it('对于非数字返回false', () => {
      expect(isPositiveZero('0')).toBe(false)
      expect(isPositiveZero(null)).toBe(false)
      expect(isPositiveZero(undefined)).toBe(false)
      expect(isPositiveZero({})).toBe(false)
    })
  })

  describe('isNegativeZero', () => {
    it('对于负0返回true', () => {
      expect(isNegativeZero(-0)).toBe(true)
    })

    it('对于非负0返回false', () => {
      expect(isNegativeZero(0)).toBe(false)
      expect(isNegativeZero(1)).toBe(false)
      expect(isNegativeZero(-1)).toBe(false)
      expect(isNegativeZero(NaN)).toBe(false)
      expect(isNegativeZero(Infinity)).toBe(false)
      expect(isNegativeZero(-Infinity)).toBe(false)
    })

    it('对于非数字返回false', () => {
      expect(isNegativeZero('0')).toBe(false)
      expect(isNegativeZero(null)).toBe(false)
      expect(isNegativeZero(undefined)).toBe(false)
      expect(isNegativeZero({})).toBe(false)
    })
  })

  // 正数测试
  describe('isPositiveNumber', () => {
    it('should return true for positive numbers', () => {
      expect(isPositiveNumber(5)).toBe(true)
      expect(isPositiveNumber(3.14)).toBe(true) // 假设正的十进制数也被认为是正的
    })

    it('should return false for non-positive numbers', () => {
      expect(isPositiveNumber(-5)).toBe(false)
      expect(isPositiveNumber(0)).toBe(false)
      expect(isPositiveNumber('5')).toBe(false)
    })
  })

  // 负数测试
  describe('isNegativeNumber', () => {
    it('should return true for negative numbers', () => {
      expect(isNegativeNumber(-5)).toBe(true)
    })

    it('should return false for non-negative numbers', () => {
      expect(isNegativeNumber(5)).toBe(false)
      expect(isNegativeNumber(0)).toBe(false)
      expect(isNegativeNumber('-5')).toBe(false)
    })
  })

  // 整数测试
  describe('isInteger', () => {
    it('should return true for integers', () => {
      expect(isInteger(5)).toBe(true)
      expect(isInteger(-5)).toBe(true)
    })

    it('should return false for non-integers', () => {
      expect(isInteger(5.5)).toBe(false)
      expect(isInteger('5')).toBe(false)
    })
  })

  // 正整数测试
  describe('isPositiveInteger', () => {
    it('should return true for positive integers', () => {
      expect(isPositiveInteger(5)).toBe(true)
    })

    it('should return false for non-positive integers or non-integers', () => {
      expect(isPositiveInteger(-5)).toBe(false)
      expect(isPositiveInteger(5.5)).toBe(false)
      expect(isPositiveInteger('5')).toBe(false)
    })
  })

  // 负整数测试
  describe('isNegativeInteger', () => {
    // 注意：这里有一个逻辑错误，应为isNegativeNumber(val) && isInteger(val)，已修正
    it('should return true for negative integers', () => {
      expect(isNegativeInteger(-5)).toBe(true)
    })

    it('should return false for non-negative integers or non-integers', () => {
      expect(isNegativeInteger(5)).toBe(false)
      expect(isNegativeInteger(-5.5)).toBe(false)
      expect(isNegativeInteger('5')).toBe(false)
    })
  })
})
