import { isSymbol, isSymbolTS } from '../Symbol'

it('isSymbol', () => {
  expect(isSymbol(Symbol('test'))).toBe(true)

  expect(isSymbol('test')).toBe(false)
})

it('isSymbolTS', () => {
  expect(isSymbolTS(Symbol('test'))).toBe(true)

  expect(isSymbolTS('test')).toBe(false)
})
