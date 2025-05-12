import { isRegExp, isRegExpCR } from '../RegExp'

it('isRegExp', () => {
  expect(isRegExp(/test/)).toBe(true)

  expect(isRegExp(null)).toBe(false)
  expect(isRegExp('test')).toBe(false)
  expect(isRegExp(5)).toBe(false)
  expect(isRegExp({})).toBe(false)
})

it('isRegExpCR', () => {
  expect(isRegExpCR(/test/)).toBe(true)

  expect(isRegExpCR(null)).toBe(false)
  expect(isRegExpCR('test')).toBe(false)
  expect(isRegExpCR(5)).toBe(false)
  expect(isRegExpCR({})).toBe(false)
})
