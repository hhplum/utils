import { isWeakSet, isWeakSetCR } from '../WeakSet'

it('isWeakSet', () => {
  expect(isWeakSet(new WeakSet())).toBe(true)

  expect(isWeakSet([])).toBe(false)
  expect(isWeakSet({})).toBe(false)
  expect(isWeakSet(null)).toBe(false)
})

it('isWeakSetCR', () => {
  expect(isWeakSetCR(new WeakSet())).toBe(true)

  expect(isWeakSetCR([])).toBe(false)
  expect(isWeakSetCR({})).toBe(false)
  expect(isWeakSetCR(null)).toBe(false)
})
