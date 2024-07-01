declare let global: {}

let _globalThis: any
export const getGlobalThis = (): any => {
  return (
    _globalThis ||
    (_globalThis =
      typeof globalThis !== 'undefined'
        ? globalThis
        : typeof self !== 'undefined'
          ? self
          : typeof window !== 'undefined'
            ? window
            : typeof global !== 'undefined'
              ? global
              : {})
  )
}

export const NOOP = (): void => {}

/**
 * Function
 */
export type Fn<T = void> = (...arg: any[]) => T

/**
 * PlainObject
 * @note 松散宽泛程度：object > Record > PlainObject
 */
export type PlainObject<T extends PropertyKey = PropertyKey, V = any> = {
  [key in T]: V
}

/**
 * 从I接口中筛选出为T类型的key
 */
export type ExtractKey<I, T> = {
  [K in keyof I]: I[K] extends T ? K : never
}[keyof I]

/**
 * Promise队列
 * @param promises
 */
export const PromiseQueue = <P>(
  promises: Fn<Promise<P>>[],
): Promise<{ error: any; index: number } | P[]> =>
  new Promise((resolve, reject) => {
    let currentIndex: number = 0
    const results: any[] = []

    const runNextPromise = () => {
      if (currentIndex >= promises.length) {
        // 如果所有Promise都成功执行完毕，则返回null表示没有错误
        resolve(results)
        return
      }

      promises[currentIndex]().then(
        (result: any) => {
          // 当前Promise成功，继续下一个
          results.push(result)
          currentIndex++
          runNextPromise()
        },
        error => {
          // 当前Promise失败，记录错误并返回
          reject({ error, index: currentIndex })
        },
      )
    }

    // 开始执行第一个Promise
    runNextPromise()
  })
