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
} from '../Number'

it('isNumber', () => {
  expect(isNumber(42)).toBe(true)
  expect(isNumber(-10.5)).toBe(true)
  expect(isNumber(NaN)).toBe(true)
  expect(isNumber(Infinity)).toBe(true)
  expect(isNumber(-Infinity)).toBe(true)

  expect(isNumber('42')).toBe(false)
  expect(isNumber(null)).toBe(false)
})

it('isFloat', () => {
  expect(isFloat(3.14)).toBe(true)
  expect(isFloat(-0.1)).toBe(true)

  expect(isFloat(NaN)).toBe(false)
  expect(isFloat(Infinity)).toBe(false)
  expect(isFloat(-Infinity)).toBe(false)
  expect(isFloat(42)).toBe(false)
  expect(isFloat(-10)).toBe(false)
  expect(isFloat('0.56')).toBe(false)
  expect(isFloat(null)).toBe(false)
})

it('isOdd', () => {
  expect(isOdd(1)).toBe(true)
  expect(isOdd(-1)).toBe(true)
  expect(isOdd(99)).toBe(true)

  expect(isOdd(0)).toBe(false)
  expect(isOdd(2)).toBe(false)
  expect(isOdd(100)).toBe(false)

  expect(isOdd('odd')).toBe(false)
  expect(isOdd(true)).toBe(false)
  expect(isOdd({})).toBe(false)

  expect(isOdd(NaN)).toBe(false)
  expect(isOdd(Infinity)).toBe(false)
  expect(isOdd(-Infinity)).toBe(false)
})

it('isEven', () => {
  expect(isEven(0)).toBe(true)
  expect(isEven(2)).toBe(true)
  expect(isEven(100)).toBe(true)

  expect(isEven(1)).toBe(false)
  expect(isEven(-1)).toBe(false)
  expect(isEven(99)).toBe(false)

  expect(isEven('even')).toBe(false)
  expect(isEven(false)).toBe(false)
  expect(isEven({})).toBe(false)

  expect(isEven(NaN)).toBe(false)
  expect(isEven(Infinity)).toBe(false)
  expect(isEven(-Infinity)).toBe(false)
})

it('isZero', () => {
  expect(isZero(0)).toBe(true)
  expect(isZero(-0)).toBe(true)

  expect(isZero(1)).toBe(false)
  expect(isZero(-1)).toBe(false)
  expect(isZero(NaN)).toBe(false)
  expect(isZero(Infinity)).toBe(false)
  expect(isZero(-Infinity)).toBe(false)

  expect(isZero('0')).toBe(false)
  expect(isZero(null)).toBe(false)
  expect(isZero(undefined)).toBe(false)
  expect(isZero({})).toBe(false)

  expect(isZero('0')).toBe(false)
  expect(isZero(null)).toBe(false)
  expect(isZero(undefined)).toBe(false)
  expect(isZero({})).toBe(false)

  expect(isZero('0')).toBe(false)
  expect(isZero(null)).toBe(false)
  expect(isZero(undefined)).toBe(false)
  expect(isZero({})).toBe(false)
})

it('isPositiveZero', () => {
  expect(isPositiveZero(0)).toBe(true)

  expect(isPositiveZero(-0)).toBe(false)
  expect(isPositiveZero(1)).toBe(false)
  expect(isPositiveZero(-1)).toBe(false)
  expect(isPositiveZero(NaN)).toBe(false)
  expect(isPositiveZero(Infinity)).toBe(false)
  expect(isPositiveZero(-Infinity)).toBe(false)

  expect(isPositiveZero('0')).toBe(false)
  expect(isPositiveZero(null)).toBe(false)
  expect(isPositiveZero(undefined)).toBe(false)
  expect(isPositiveZero({})).toBe(false)
})

it('isNegativeZero', () => {
  expect(isNegativeZero(-0)).toBe(true)

  expect(isNegativeZero(0)).toBe(false)
  expect(isNegativeZero(1)).toBe(false)
  expect(isNegativeZero(-1)).toBe(false)
  expect(isNegativeZero(NaN)).toBe(false)
  expect(isNegativeZero(Infinity)).toBe(false)
  expect(isNegativeZero(-Infinity)).toBe(false)

  expect(isNegativeZero('0')).toBe(false)
  expect(isNegativeZero(null)).toBe(false)
  expect(isNegativeZero(undefined)).toBe(false)
  expect(isNegativeZero({})).toBe(false)
})

// 正数测试
it('isPositiveNumber', () => {
  expect(isPositiveNumber(5)).toBe(true)
  expect(isPositiveNumber(3.14)).toBe(true) // 假设正的十进制数也被认为是正的
  expect(isPositiveNumber(Infinity)).toBe(true)

  expect(isPositiveNumber(-5)).toBe(false)
  expect(isPositiveNumber(0)).toBe(false)
  expect(isPositiveNumber('5')).toBe(false)

  expect(isPositiveNumber(NaN)).toBe(false)
  expect(isPositiveNumber(-Infinity)).toBe(false)
})

// 负数测试
it('isNegativeNumber', () => {
  expect(isNegativeNumber(-5)).toBe(true)
  expect(isNegativeNumber(-Infinity)).toBe(true)

  expect(isNegativeNumber(5)).toBe(false)
  expect(isNegativeNumber(0)).toBe(false)
  expect(isNegativeNumber('-5')).toBe(false)
  expect(isNegativeNumber(NaN)).toBe(false)
  expect(isNegativeNumber(Infinity)).toBe(false)
})

// 整数测试
it('isInteger', () => {
  expect(isInteger(5)).toBe(true)
  expect(isInteger(-5)).toBe(true)

  expect(isInteger(5.5)).toBe(false)
  expect(isInteger('5')).toBe(false)

  expect(isInteger(NaN)).toBe(false)
  expect(isInteger(Infinity)).toBe(false)
  expect(isInteger(-Infinity)).toBe(false)
})

// 正整数测试
it('isPositiveInteger', () => {
  expect(isPositiveInteger(5)).toBe(true)

  expect(isPositiveInteger(-5)).toBe(false)
  expect(isPositiveInteger(5.5)).toBe(false)
  expect(isPositiveInteger('5')).toBe(false)

  expect(isPositiveInteger(NaN)).toBe(false)
  expect(isPositiveInteger(Infinity)).toBe(false)
  expect(isPositiveInteger(-Infinity)).toBe(false)
})

// 负整数测试
it('isNegativeInteger', () => {
  expect(isNegativeInteger(-5)).toBe(true)

  expect(isNegativeInteger(5)).toBe(false)
  expect(isNegativeInteger(-5.5)).toBe(false)
  expect(isNegativeInteger('5')).toBe(false)

  expect(isNegativeInteger(NaN)).toBe(false)
  expect(isNegativeInteger(Infinity)).toBe(false)
  expect(isNegativeInteger(-Infinity)).toBe(false)
})
