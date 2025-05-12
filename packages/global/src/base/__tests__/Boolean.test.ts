import { isBoolean, isBooleanCR, isBooleanTS } from '../Boolean'

it('isBoolean', () => {
  expect(isBoolean(true)).toBe(true)
  expect(isBoolean(false)).toBe(true)

  // 此处的new为创建一个Boolean对象（最终结果是对象不是一个布尔值）
  // typeof new Boolean(true) => 'object'
  expect(isBoolean(new Boolean(true))).toBe(false)
  expect(isBoolean(new Boolean(false))).toBe(false)
  expect(isBoolean(1)).toBe(false)
  expect(isBoolean('true')).toBe(false)
})

it('isBooleanTS', () => {
  expect(isBooleanTS(true)).toBe(true)
  expect(isBooleanTS(false)).toBe(true)
  // Object.prototype.toString.call(new Boolean('true')) => '[object Boolean]'
  expect(isBooleanTS(new Boolean(true))).toBe(true)
  expect(isBooleanTS(new Boolean(false))).toBe(true)

  expect(isBooleanTS(1)).toBe(false)
  expect(isBooleanTS('true')).toBe(false)
})

it('isBooleanCR', () => {
  // new Boolean(true) instanceof Boolean（成立但是内部值需要调用valueOf()才能返回）
  expect(isBooleanCR(new Boolean(true))).toBe(true)
  expect(isBooleanCR(new Boolean(false))).toBe(true)

  expect(isBooleanCR(true)).toBe(false)
  expect(isBooleanCR(false)).toBe(false)
  expect(isBooleanCR(1)).toBe(false)
  expect(isBooleanCR('true')).toBe(false)
})
