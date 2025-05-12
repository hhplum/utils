import { isUrl, isUrlCR } from '../URL'

it('isUrl', () => {
  expect(isUrl('https://example.com')).toBe(true)
  expect(isUrl(new URL('https://example.com'))).toBe(true)

  expect(isUrl('invalid url')).toBe(false)
  expect(isUrl(null)).toBe(false)
  expect(isUrl(5)).toBe(false)
  expect(isUrl({})).toBe(false)
})

it('isUrlCR', () => {
  expect(isUrlCR('https://example.com')).toBe(true)
  expect(isUrlCR(new URL('https://example.com'))).toBe(true)

  expect(isUrlCR('invalid url')).toBe(false)
  expect(isUrlCR(null)).toBe(false)
  expect(isUrlCR(5)).toBe(false)
  expect(isUrlCR({})).toBe(false)
})
