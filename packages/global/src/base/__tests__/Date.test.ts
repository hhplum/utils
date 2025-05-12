import { isDate, isDateCR } from '../Date'

it('isDate', () => {
  expect(isDate(new Date())).toBe(true)

  expect(isDate(Date())).toBe(false)
  expect(isDate('2023-04-01')).toBe(false)
})

it('isDateCR', () => {
  expect(isDateCR(new Date())).toBe(true)

  expect(isDateCR(Date())).toBe(false)
  expect(isDateCR('2023-04-01')).toBe(false)
})
