import { edition } from '../edition'

describe('版本号相关处理', () => {
  it('edition', () => {
    expect(edition('0.0.1')).toBe('0.0.2')
  })
})
