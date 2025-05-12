import { isPromise, isPromiseCR, isPromiseTS } from '../Promise'

it('isPromise', () => {
  expect(isPromise(Promise.resolve())).toBe(true)
  expect(isPromise(new Promise(() => {}))).toBe(true)
  expect(
    isPromise({
      then: () => {},
      catch: () => {},
    }),
  ).toBe(true)

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

it('isPromiseTS', () => {
  expect(isPromiseTS(Promise.resolve({}))).toBe(true)
  expect(isPromiseTS(new Promise(() => ({})))).toBe(true)

  expect(isPromiseTS(null)).toBe(false)
  expect(isPromiseTS(undefined)).toBe(false)
  expect(isPromiseTS(123)).toBe(false)
  expect(isPromiseTS('hello')).toBe(false)
  expect(
    isPromiseTS({
      then: () => {},
    }),
  ).toBe(false)
  expect(
    isPromiseTS({
      then: () => {},
      catch: () => {},
    }),
  ).toBe(false)
  expect(isPromiseTS(() => {})).toBe(false)
})

it('isPromiseCR', () => {
  expect(isPromiseCR(Promise.resolve({}))).toBe(true)
  expect(isPromiseCR(new Promise(() => ({})))).toBe(true)

  expect(isPromiseCR(null)).toBe(false)
  expect(isPromiseCR(undefined)).toBe(false)
  expect(isPromiseCR(123)).toBe(false)
  expect(isPromiseCR('hello')).toBe(false)
  expect(
    isPromiseCR({
      then: () => {},
    }),
  ).toBe(false)
  expect(
    isPromiseCR({
      then: () => {},
      catch: () => {},
    }),
  ).toBe(false)
  expect(isPromiseCR(() => {})).toBe(false)
})
