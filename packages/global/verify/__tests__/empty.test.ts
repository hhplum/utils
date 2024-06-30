import {
  isEmpty,
  isEmptyArray,
  isEmptyMap,
  isEmptyObject,
  isEmptySet,
  isEmptyString,
} from '../empty'

describe('空类型检查', () => {
  describe('检查是否为空函数测试', () => {
    it('空数组应返回true', () => {
      expect(isEmpty([])).toBe(true)
    })

    it('空字符串应返回true', () => {
      expect(isEmpty('')).toBe(true)
    })

    it('空 Map 应返回true', () => {
      expect(isEmpty(new Map())).toBe(true)
    })

    it('空 Set 应返回true', () => {
      expect(isEmpty(new Set())).toBe(true)
    })

    it('空对象应返回true', () => {
      expect(isEmpty({})).toBe(true)
    })

    it('非空值应返回false', () => {
      expect(isEmpty([1, 2, 3])).toBe(false)
      expect(isEmpty('test')).toBe(false)
      expect(isEmpty(new Map([['key', 'value']]))).toBe(false)
      expect(isEmpty(new Set(['value']))).toBe(false)
      expect(isEmpty({ key: 'value' })).toBe(false)
    })

    it('其他类型返回false', () => {
      expect(isEmpty(true)).toBe(false)
    })
  })

  describe('检查是否为空字符串函数测试', () => {
    it('空字符串应返回true', () => {
      expect(isEmptyString('')).toBe(true)
    })

    it('非空字符串应返回false', () => {
      expect(isEmptyString('test')).toBe(false)
    })
  })

  describe('检查是否为空数组函数测试', () => {
    it('空数组应返回true', () => {
      expect(isEmptyArray([])).toBe(true)
    })

    it('非空数组应返回false', () => {
      expect(isEmptyArray(['元素'])).toBe(false)
    })
  })

  describe('检查是否为空 Map 函数测试', () => {
    it('空 Map 应返回true', () => {
      expect(isEmptyMap(new Map())).toBe(true)
    })

    it('非空 Map 应返回false', () => {
      expect(isEmptyMap(new Map([['键', '值']]))).toBe(false)
    })
  })

  describe('检查是否为空 Set 函数测试', () => {
    it('空 Set 应返回true', () => {
      expect(isEmptySet(new Set())).toBe(true)
    })

    it('非空 Set 应返回false', () => {
      expect(isEmptySet(new Set(['元素']))).toBe(false)
    })
  })

  describe('检查是否为空对象函数测试', () => {
    it('空对象应返回true', () => {
      expect(isEmptyObject({})).toBe(true)
    })

    it('非空对象应返回false', () => {
      expect(isEmptyObject({ key: '值' })).toBe(false)
    })
  })
})
