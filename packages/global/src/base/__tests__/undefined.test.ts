import { isDefined, isUndefined, isUndefinedTS } from '../undefined'

it('isUndefined', () => {
  expect(isUndefined(undefined)).toBe(true)

  expect(isUndefined('test')).toBe(false)
})

it('isUndefinedTS', () => {
  expect(isUndefinedTS(undefined)).toBe(true)

  expect(isUndefinedTS('test')).toBe(false)
})

it('isDefined', () => {
  expect(isDefined('test')).toBe(true)

  expect(isDefined(undefined)).toBe(false)
  expect(isDefined()).toBe(false)
})
