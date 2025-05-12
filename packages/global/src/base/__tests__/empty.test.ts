import {
  isEmpty,
  isEmptyArray,
  isEmptyMap,
  isEmptyObject,
  isEmptySet,
  isEmptyString,
} from '../empty'

it('isEmpty', () => {
  expect(isEmpty([])).toBe(true)
  expect(isEmpty('')).toBe(true)
  expect(isEmpty(new Map())).toBe(true)
  expect(isEmpty(new Set())).toBe(true)
  expect(isEmpty({})).toBe(true)

  expect(isEmpty([1, 2, 3])).toBe(false)
  expect(isEmpty('test')).toBe(false)
  expect(isEmpty(new Map([['key', 'value']]))).toBe(false)
  expect(isEmpty(new Set(['value']))).toBe(false)
  expect(isEmpty({ key: 'value' })).toBe(false)

  expect(isEmpty(true)).toBe(false)
})

it('isEmptyString', () => {
  expect(isEmptyString('')).toBe(true)

  expect(isEmptyString('test')).toBe(false)
})

it('isEmptyArray', () => {
  expect(isEmptyArray([])).toBe(true)

  expect(isEmptyArray(['元素'])).toBe(false)
})

it('isEmptyMap', () => {
  expect(isEmptyMap(new Map())).toBe(true)

  expect(isEmptyMap(new Map([['键', '值']]))).toBe(false)
})

it('isEmptySet', () => {
  expect(isEmptySet(new Set())).toBe(true)

  expect(isEmptySet(new Set(['元素']))).toBe(false)
})

it('isEmptyObject', () => {
  expect(isEmptyObject({})).toBe(true)

  expect(isEmptyObject({ key: '值' })).toBe(false)
})
