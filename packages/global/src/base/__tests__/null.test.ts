import {
  isNull,
  isNullOrUndefined,
  isNullOrUndefinedTS,
  isNullTS,
} from '../null'

it('isNull', () => {
  expect(isNull(null)).toBe(true)

  expect(isNull('null')).toBe(false)
})

it('isNullTS', () => {
  expect(isNullTS(null)).toBe(true)

  expect(isNullTS('null')).toBe(false)
})

it('isNullOrUndefined', () => {
  expect(isNullOrUndefined(null)).toBe(true)
  expect(isNullOrUndefined(undefined)).toBe(true)

  expect(isNullOrUndefined('null')).toBe(false)
})

it('isNullOrUndefinedTS', () => {
  expect(isNullOrUndefinedTS(null)).toBe(true)
  expect(isNullOrUndefinedTS(undefined)).toBe(true)

  expect(isNullOrUndefinedTS('null')).toBe(false)
})
