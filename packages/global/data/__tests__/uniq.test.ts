import { uniq } from '../uniq'

describe('简单数组去重', () => {
  it('字符串数组', () => {
    expect(uniq(['1', '2', '3', '2'])).toStrictEqual(['1', '2', '3'])
  })
})
