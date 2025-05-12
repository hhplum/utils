import { isMap, isMapCR } from '../Map'

it('isMap', () => {
  expect(isMap(new Map())).toBe(true)

  expect(isMap([])).toBe(false)
  expect(isMap({})).toBe(false)
  expect(isMap(null)).toBe(false)
})

it('isMapCR', () => {
  expect(isMapCR(new Map())).toBe(true)

  expect(isMapCR([])).toBe(false)
  expect(isMapCR({})).toBe(false)
  expect(isMapCR(null)).toBe(false)
})
