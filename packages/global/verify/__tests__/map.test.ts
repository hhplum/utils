import { isMap, isMapIf } from '../map'

describe('Map类型检查', () => {
  describe('isMap', () => {
    it('isMap should return true for Map instances', () => {
      expect(isMap(new Map())).toBe(true)
    })

    it('isMap should return false for non-Map objects', () => {
      expect(isMap([])).toBe(false)
      expect(isMap({})).toBe(false)
      expect(isMap(null)).toBe(false)
    })
  })

  describe('isMapIf', () => {
    it('isMapIf should return true for Map instances', () => {
      expect(isMapIf(new Map())).toBe(true)
    })

    it('isMapIf should return false for non-Map objects', () => {
      expect(isMapIf([])).toBe(false)
      expect(isMapIf({})).toBe(false)
      expect(isMapIf(null)).toBe(false)
    })
  })
})
