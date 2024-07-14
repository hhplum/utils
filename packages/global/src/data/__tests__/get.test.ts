import { get } from '../get'

describe('get方法', () => {
  describe('普通对象', () => {
    const obj = { a: 'v', b: ['测试', 'ccc', { c: 6, d: { e: 9 } }] }

    it('点操作符形式', () => {
      // 存在
      expect(get(obj, 'b[2].c')).toBe(6)
      // 不存在
      expect(get(obj, 'b[3].c')).toBe(undefined)
      // 不存在 有默认值
      expect(get(obj, 'b[3].c', 'c')).toBe('c')
    })

    it('数组形式', () => {
      // 存在
      expect(get(obj, ['b', 2, 'd', 'e'])).toBe(9)
      // 不存在
      expect(get(obj, ['b', '3', 'c'])).toBe(undefined)
      // 不存在 有默认值
      expect(get(obj, ['b', '2', 'd', 'f'], 'r')).toBe('r')
    })
  })

  describe('数组对象', () => {
    const arr = [1, 2, [3, [5, 6], 4]]

    it('索引字符串', () => {
      // 存在
      expect(get(arr, '[2][1][1]')).toBe(6)
      // 不存在
      expect(get(arr, '[2][1][2]')).toBe(undefined)
      // 不存在 有默认值
      expect(get(arr, '[2][1][2]', 'r')).toBe('r')
    })

    it('索引数组', () => {
      // 存在
      expect(get(arr, [2, 1, 1])).toBe(6)
      // 不存在
      expect(get(arr, [2, 1, 2])).toBe(undefined)
      // 不存在 有默认值
      expect(get(arr, [2, 1, 2], 'r')).toBe('r')
    })
  })
})
