import { randomString, randomStringArray } from '../randomString'

describe('随机字符串', () => {
  const v4 =
    /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}$/
  const s = /[a-zA-Z0-9]{8}/

  it('随机字符', () => {
    // UUIDv4字符
    // expect(randomString()).toMatch(v4)
    // 8个字符长度 62字符集
    // expect(randomString(8)).toMatch(s)
    // 8个字符长度 10字符集（数字）
    // expect(randomString(8, 10)).toMatch(/\d{8}/)
    console.log(randomString(1, 2))
  })
  it('指定数量随机字符', () => {
    // 3个 UUIDv4字符
    expect(randomStringArray(3).some(i => v4.test(i))).true
    // 4个 8个字符长度 62字符集
    expect(randomStringArray(4, 8).some(i => s.test(i))).true
    console.log(randomStringArray(4, 8, ''))
  })
})
