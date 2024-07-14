import { CryptoJs, cryptoUtf8Parse as utf8Parse } from './info'

/**
 * 加密密钥
 * @description 将真实密钥进行加密处理
 * @param key 密钥
 * @param salt 盐
 * @param iterations 迭代次数
 * @param size=256 长度
 */
export const encryptKey = (
  key: string,
  salt: string,
  iterations: number,
  size: number = 256,
): string =>
  CryptoJs.PBKDF2(utf8Parse(key), utf8Parse(salt), {
    keySize: size,
    iterations: Number(iterations),
  }).toString()
