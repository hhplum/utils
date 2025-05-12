import {
  isString,
  isStringBoolean,
  isStringCR,
  isStringFalse,
  isStringNull,
  isStringNumber,
  isStringTS,
  isStringTrue,
  isStringUndefined,
} from '../String'

it('isString', () => {
  expect(isString('test')).toBe(true)

  expect(isString(123)).toBe(false)
  expect(isString({})).toBe(false)
  expect(isString(undefined)).toBe(false)
})

it('isStringTS', () => {
  expect(isStringTS(new String('test'))).toBe(true)
  expect(isStringTS('test')).toBe(true)

  expect(isStringTS(123)).toBe(false)
  expect(isStringTS({})).toBe(false)
  expect(isStringTS(undefined)).toBe(false)
})

it('isStringCR', () => {
  expect(isStringCR(new String('test'))).toBe(true)

  expect(isStringCR(String)).toBe(false)
  expect(isStringCR(Number)).toBe(false)
})

it('isStringNull', () => {
  expect(isStringNull('null')).toBe(true)

  expect(isStringNull(null)).toBe(false)
})

it('isStringUndefined', () => {
  expect(isStringUndefined('undefined')).toBe(true)

  expect(isStringUndefined(undefined)).toBe(false)
})

it('isStringTrue', () => {
  expect(isStringTrue('true')).toBe(true)

  expect(isStringTrue(true)).toBe(false)
})

it('isStringFalse', () => {
  expect(isStringFalse('false')).toBe(true)

  expect(isStringFalse(false)).toBe(false)
})

it('isStringBoolean', () => {
  expect(isStringBoolean('true')).toBe(true)
  expect(isStringBoolean('false')).toBe(true)

  expect(isStringBoolean(true)).toBe(false)
})

it('isStringNumber', () => {
  expect(isStringNumber('123')).toBe(true)
  expect(isStringNumber('12.3')).toBe(true)

  expect(isStringNumber('12.3.4')).toBe(false)
  expect(isStringNumber('abc')).toBe(false)
})
