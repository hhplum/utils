import { isBrowser, isElement, isWindow } from '../env'

it('isWindow', () => {
  expect(isWindow(jsdom.window)).toBe(typeof window !== 'undefined')
})

it('isElement', () => {
  if (typeof document !== 'undefined') {
    const element = document.createElement('div')
    expect(isElement(element)).toBe(true)
    expect(isElement({})).toBe(false)
  }
})

it('isBrowser', () => {
  expect(isBrowser()).toBe(isWindow(jsdom.window))
})
