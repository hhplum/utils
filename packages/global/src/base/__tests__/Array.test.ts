/* eslint-disable @typescript-eslint/no-array-constructor */
import { isArray, isArrayCR, isArrayTS } from '../Array'

it('isArray', () => {
  expect(isArray([1, 2, 3])).toBe(true)
  expect(isArray(new Array(1, 2, 3))).toBe(true)
  expect(isArray(Array(1, 2, 3))).toBe(true)

  expect(isArray(123)).toBe(false)
  expect(isArray('abc')).toBe(false)
  expect(isArray({})).toBe(false)
  expect(isArray(undefined)).toBe(false)
})

it('isArrayTS', () => {
  expect(isArrayTS([1, 2, 3])).toBe(true)
  expect(isArrayTS(new Array(1, 2, 3))).toBe(true)
  expect(isArrayTS(Array(1, 2, 3))).toBe(true)

  expect(isArrayTS(123)).toBe(false)
  expect(isArrayTS('abc')).toBe(false)
  expect(isArrayTS({})).toBe(false)
  expect(isArrayTS(undefined)).toBe(false)
})

it('isArrayCR', () => {
  expect(isArrayCR([1, 2, 3])).toBe(true)
  expect(isArrayCR(new Array(1, 2, 3))).toBe(true)
  expect(isArrayCR(Array(1, 2, 3))).toBe(true)

  expect(isArrayCR(123)).toBe(false)
  expect(isArrayCR('abc')).toBe(false)
  expect(isArrayCR({})).toBe(false)
  expect(isArrayCR(undefined)).toBe(false)
})
