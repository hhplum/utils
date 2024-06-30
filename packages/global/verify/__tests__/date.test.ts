import { isDate, isDateIf } from '../date'

describe('日期类型检查', () => {
  describe('isDate', () => {
    it('对于日期对象返回true', () => {
      expect(isDate(new Date())).toBe(true)
    })

    it('对于非日期对象返回false', () => {
      // Data() => string
      expect(isDate(Date())).toBe(false)
      expect(isDate('2023-04-01')).toBe(false)
    })
  })

  describe('isDateIf', () => {
    it('对于日期对象返回true', () => {
      expect(isDateIf(new Date())).toBe(true)
    })

    it('对于非日期对象返回false', () => {
      // Data() => string
      expect(isDateIf(Date())).toBe(false)
      expect(isDateIf('2023-04-01')).toBe(false)
    })
  })
})
