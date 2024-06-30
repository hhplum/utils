import {
  isBigInt,
  isNull,
  isNullOrUndefined,
  isSymbol,
  isUndefined,
} from '../only'

describe('Utils', () => {
  // isNull test
  it('对于 null 返回true', () => {
    expect(isNull(null)).toBe(true)
    expect(isNull('null')).toBe(false)
  })

  // isUndefined test
  it('对于 undefined 返回true', () => {
    expect(isUndefined(undefined)).toBe(true)
    expect(isUndefined('undefined')).toBe(false)
  })

  // isNullOrUndefined test
  // isNOU alias test
  it('对于 null 或者 undefined 返回true', () => {
    expect(isNullOrUndefined(null)).toBe(true)
    expect(isNullOrUndefined(undefined)).toBe(true)
    expect(isNullOrUndefined('null')).toBe(false)
  })

  // isBigInt test
  it('对于bigint值返回true', () => {
    expect(isBigInt(BigInt(123))).toBe(true)
    expect(isBigInt('123')).toBe(false)
  })

  // isSymbol test
  it('对于symbol值应该返回true', () => {
    expect(isSymbol(Symbol('test'))).toBe(true)
    expect(isSymbol('test')).toBe(false)
  })
})
