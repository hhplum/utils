import { isString } from '../verify/String'
import type { PlainObject } from '../info'
import type { CipherHelper, CryptoKey } from './info'
import {
  CryptoJs,
  cryptoKey,
  cryptoUtf8Parse as utf8Parse,
  cryptoUtf8Stringify as utf8Stringify,
} from './info'
import { encryptKey } from './encryptKey'

export type CryptoType = keyof CipherHelper

/**
 * 加解公共方法
 * @param type 类型
 * @param data 数据
 * @param info 密钥对象
 */
const handle = (type: CryptoType, data: string, info: CryptoKey) => {
  const { key, salt, iv, iterations, type: Type } = info
  const Key = encryptKey(key, salt, iterations)
  const cfg = {
    iv: utf8Parse(encryptKey(iv, salt, iterations)),
    mode: CryptoJs.mode[info.mode],
    padding: CryptoJs.pad[info.padding],
  }
  return type === 'encrypt'
    ? CryptoJs[Type].encrypt(data, Key, cfg).toString()
    : type === 'decrypt'
      ? utf8Stringify(CryptoJs[Type].decrypt(data, Key, cfg))
      : ''
}

/**
 * 加解密
 * @param type 类型
 * @param data 数据
 * @param key 密钥数组
 */
const crypto = (
  type: CryptoType,
  data: string | PlainObject,
  key: CryptoKey[],
) => {
  let result = ''
  key.forEach((item, index) => {
    data = index === 0 ? (isString(data) ? data : JSON.stringify(data)) : result
    result = handle(type, data, item)
  })
  return result
}

/**
 * 加密
 * @param data 数据
 * @param key=cryptoKey 密钥数组
 */
export const encrypt = (
  data: string | PlainObject,
  key: CryptoKey[] = cryptoKey,
): string => crypto('encrypt', data, key)

/**
 * 解密
 * @param data 数据
 * @param key=cryptoKey 密钥数组
 */
export const decrypt = (
  data: string | PlainObject,
  key: CryptoKey[] = cryptoKey,
): PlainObject | string => {
  key = key.reverse()
  const result = crypto('decrypt', data, key)
  // 尝试解析对象
  try {
    return JSON.parse(result) as PlainObject
  } catch (_error) {
    return result
  }
}
