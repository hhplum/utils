import { isPromise, isPromiseIf } from '../Promise'

describe('isPromise', () => {
  it('should return true for a Promise', () => {
    expect(isPromise(Promise.resolve())).toBe(true)
    expect(isPromise(new Promise(() => {}))).toBe(true)
  })

  it('should return false for non-Promise objects', () => {
    expect(isPromise(null)).toBe(false)
    expect(isPromise(undefined)).toBe(false)
    expect(isPromise(123)).toBe(false)
    expect(isPromise('hello')).toBe(false)
    expect(
      isPromise({
        then: () => {},
      }),
    ).toBe(false)
    expect(isPromise(() => {})).toBe(false)
  })
})

describe('isPromiseIf', () => {
  it('should return true for a Promise-like object', () => {
    expect(
      isPromiseIf({
        then: () => {},
        catch: () => {},
      }),
    ).toBe(true)
    expect(isPromiseIf({ then: Function, catch: Function })).toBe(true)
  })

  it('should return false for non-Promise-like objects', () => {
    expect(isPromiseIf(null)).toBe(false)
    expect(isPromiseIf(undefined)).toBe(false)
    expect(isPromiseIf(123)).toBe(false)
    expect(isPromiseIf('hello')).toBe(false)
    expect(isPromiseIf({})).toBe(false)
    expect(isPromiseIf(() => {})).toBe(false)
  })
})
