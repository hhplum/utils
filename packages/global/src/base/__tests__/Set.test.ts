import { isSet, isSetCR } from '../Set'

const set = new Set([1, 2, 3])

it('isSet', () => {
  expect(isSet(set)).toBe(true)

  expect(isSet(null)).toBe(false)
  expect(isSet([])).toBe(false) // Array, not a Set
  expect(isSet(5)).toBe(false)
  expect(isSet('test')).toBe(false)
  expect(isSet({})).toBe(false)
})

it('isSetCR', () => {
  expect(isSetCR(set)).toBe(true)

  expect(isSetCR(null)).toBe(false)
  expect(isSetCR([])).toBe(false) // Array, not a Set
  expect(isSetCR(5)).toBe(false)
  expect(isSetCR('test')).toBe(false)
  expect(isSetCR({})).toBe(false)
})
