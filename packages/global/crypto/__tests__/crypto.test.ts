import { decrypt, encrypt } from '../crypto'

describe('加解密', () => {
  const obj = { name: '测试', id: 6 }
  it('all', () => {
    // 加密
    const r = encrypt(obj)
    // 解密
    const o = decrypt(r)
    expect(o).toStrictEqual(obj)
  })
})
