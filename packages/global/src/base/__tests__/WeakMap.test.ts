import { isWeakMap, isWeakMapCR } from '../WeakMap'

it('isWeakMap', () => {
  expect(isWeakMap(new WeakMap())).toBe(true)

  expect(isWeakMap([])).toBe(false)
  expect(isWeakMap({})).toBe(false)
  expect(isWeakMap(null)).toBe(false)
})

it('isWeakMapCR', () => {
  expect(isWeakMapCR(new WeakMap())).toBe(true)

  expect(isWeakMapCR([])).toBe(false)
  expect(isWeakMapCR({})).toBe(false)
  expect(isWeakMapCR(null)).toBe(false)
})
