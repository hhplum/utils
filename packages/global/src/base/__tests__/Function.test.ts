/* eslint-disable @typescript-eslint/no-empty-function */
import { isFunction, isFunctionCR, isFunctionTS } from '../Function'

it('isFunction', () => {
  expect(isFunction(() => {})).toBe(true)
  expect(isFunction(function test() {})).toBe(true)

  expect(isFunction(null)).toBe(false)
  expect(isFunction(123)).toBe(false)
  expect(isFunction('hello')).toBe(false)
  expect(isFunction({})).toBe(false)
})

it('isFunctionCR', () => {
  expect(isFunctionCR(new Function())).toBe(true)
  expect(isFunctionCR(() => {})).toBe(true)
  expect(isFunctionCR(function test() {})).toBe(true)
})

it('isFunctionTS', () => {
  expect(isFunctionTS(() => {})).toBe(true)
  expect(isFunctionTS(function test() {})).toBe(true)

  expect(isFunctionTS(null)).toBe(false)
  expect(isFunctionTS(123)).toBe(false)
  expect(isFunctionTS('hello')).toBe(false)
  expect(isFunctionTS({})).toBe(false)
})
