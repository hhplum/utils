import { URLRegExp, isTypeIf, isTypeOf, typeOf } from '../info'

describe('isTypeOf', () => {
  it('isTypeOf 应该正确识别类型', () => {
    expect(isTypeOf({}, 'Object')).toBe(true)
    expect(isTypeOf(123, 'Number')).toBe(true)
    expect(isTypeOf('hello', 'String')).toBe(true)
    expect(isTypeOf(() => {}, 'Function')).toBe(true)
  })

  it('typeOf 应该返回正确的类型字符串', () => {
    expect(typeOf({}, 'object')).toBe(true)
    expect(typeOf(123, 'number')).toBe(true)
    expect(typeOf('hello', 'string')).toBe(true)
    expect(typeOf(() => {}, 'function')).toBe(true)
  })
})

describe('isTypeIf', () => {
  it('should return true for an instance of Date', () => {
    expect(isTypeIf(new Date(), Date)).toBe(true)
  })

  it('should return false for a string', () => {
    expect(isTypeIf('not a date', Date)).toBe(false)
  })
})

describe('typeOf', () => {
  it('should return "string" for a string', () => {
    expect(typeOf('test', 'string')).toBe(true)
  })

  it('should not return "string" for a number', () => {
    expect(typeOf(123, 'string')).toBe(false)
  })

  it('should return "function" for a function', () => {
    expect(typeOf(() => {}, 'function')).toBe(true)
  })
})

describe('URLRegExp', () => {
  it('should match a valid URL', () => {
    expect(URLRegExp.test('http://example.com')).toBe(true)
  })

  it('should not match an invalid URL', () => {
    expect(URLRegExp.test('not-a-url')).toBe(false)
  })
})
