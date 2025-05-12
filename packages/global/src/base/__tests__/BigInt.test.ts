import { isBigInt, isBigIntTS } from '../BigInt'

it('isBigInt', () => {
  expect(isBigInt(BigInt(123))).toBe(true)

  expect(isBigInt('123')).toBe(false)
})

it('isBigIntTS', () => {
  expect(isBigIntTS(BigInt(123))).toBe(true)

  expect(isBigIntTS('123')).toBe(false)
})
