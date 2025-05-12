/**
 * Customizing the Proxy Instance | 自定义 Proxy 实例
 */
export type ProxyObject = {
  __isProxy: boolean
} & object

/**
 * Return a custom Proxy instance | 返回一个自定义 Proxy 实例
 * @param target
 * @param handler
 */
export const createProxy = <T extends Partial<ProxyObject>>(
  target: T,
  handler: ProxyHandler<T>,
): ProxyObject => {
  if (target.__isProxy) return target as ProxyObject

  const proxy = new Proxy(target, handler)

  proxy.__isProxy = true
  Object.defineProperty(proxy, '__isProxy', {
    value: true,
    enumerable: false,
    writable: false,
    configurable: false,
  })

  return proxy as ProxyObject
}

/**
 * Whether the value passed is a Proxy instances created by the createProxy method | 传递的值是否为 createProxy 方法创建的 Proxy 实例
 * @param value
 * @note The current method only applies to Proxy instances created by the createProxy method | 当前方法仅适用于 createProxy 方法创建的 Proxy 实例
 * @note In JavaScript, there is no direct way to determine whether an object is an instance of Proxy, because Proxy does not expose a prototype that can be used for instanceof detection | 在 JavaScript 里，并没有直接的方式去判断一个对象是否为 Proxy 实例，因为 Proxy 没有向外暴露可用于 instanceof 检测的原型
 */
export const isProxy = (value: any): value is ProxyObject =>
  value && value.__isProxy === true
