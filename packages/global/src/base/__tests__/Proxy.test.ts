import { createProxy, isProxy } from '../Proxy'

it('isProxy', () => {
  expect(isProxy(createProxy({}, {}))).toBe(true)

  expect(isProxy(new Proxy({}, {}))).toBe(false)
  expect(isProxy({})).toBe(false)
})
