import { toArray, toCamelCase, toNumber, toVal } from '../conversion'

describe('转换系列', () => {
  it('单个元素转换为数组', () => {
    expect(toArray('6')).toStrictEqual(expect.any(Array))
  })

  it('字符串数字转换为数字', () => {
    expect(toNumber('123')).toStrictEqual(expect.any(Number))
  })

  it('获取对象的指定字段值', () => {
    const o = { a: '测试' }
    expect(toVal(o)).toStrictEqual({ a: expect.any(String) })
    expect(toVal(o, 'a')).toBe('测试')
  })

  it('to', () => {
    // 测试函数
    const testCases = ['path/file', 'path_file', 'path-file']

    testCases.forEach(testCase => {
      console.log(`${testCase} -> ${toCamelCase(testCase)}`)
    })
  })
})
