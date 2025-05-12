import { isObject, isObjectCR, isObjectTS, isPlainObject } from '../Object'

it('isObject', () => {
  expect(isObject({})).toBe(true)
  expect(isObject(new Date())).toBe(true) // Date is an object too

  expect(isObject(null)).toBe(false)
  expect(isObject(5)).toBe(false)
  expect(isObject('hello')).toBe(false)
})

it('isObjectTS', () => {
  expect(isObjectTS({})).toBe(true)

  expect(isObjectTS(new Date())).toBe(false)
  expect(isObjectTS(null)).toBe(false)
  expect(isObjectTS(5)).toBe(false)
  expect(isObjectTS('hello')).toBe(false)
})

it('isObjectCR', () => {
  expect(isObjectCR({})).toBe(true)
  expect(isObjectCR(new Date())).toBe(true)

  expect(isObjectCR(null)).toBe(false)
  expect(isObjectCR(5)).toBe(false)
  expect(isObjectCR('hello')).toBe(false)
})

it('isPlainObject', () => {
  expect(isPlainObject({})).toBe(true)

  expect(isPlainObject(undefined)).toBe(false)
  expect(isPlainObject(null)).toBe(false)
  expect(isPlainObject(5)).toBe(false)
  expect(isPlainObject('hello')).toBe(false)
  expect(isPlainObject(new Date())).toBe(false)
})
