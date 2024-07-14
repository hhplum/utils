import CryptoJS from 'crypto-js'
import type { ExtractKey } from '../info'

export type CryptoJS = typeof CryptoJs

export type CipherHelper = CryptoJS['AES']

export interface CryptoBaseKey {
  /**
   * 密钥
   * @note 支持含中文字符串
   */
  key: string
  /**
   * 盐
   * @note 支持含中文字符串
   */
  salt: string
  /**
   * 迭代次数
   * @note 最好不要超过1000次
   */
  iterations: number
}

/**
 * 加密密钥
 */
export interface CryptoKey extends CryptoBaseKey {
  /**
   * 加密算法
   */
  type: ExtractKey<CryptoJS, CipherHelper>
  /**
   * 偏移量
   * @note 支持含中文字符串
   */
  iv: string
  /**
   * 处理模式
   */
  mode: keyof CryptoJS['mode']
  /**
   * 填充模式
   */
  padding: keyof CryptoJS['pad']
}

/**
 * crypto-js 实例
 */
export const CryptoJs = CryptoJS

/**
 * cryptojs Utf8 parse
 */
export const cryptoUtf8Parse = CryptoJS.enc.Utf8.parse

/**
 * cryptojs Utf8 parse
 */
export const cryptoUtf8Stringify = CryptoJS.enc.Utf8.stringify

/**
 * 默认加密规则
 */
export const cryptoKey: CryptoKey[] = [
  {
    key: 'hhpNo1',
    salt: 'ROY',
    iterations: 666,
    type: 'AES',
    iv: '我c是c偏s移量@',
    mode: 'CTR',
    padding: 'Iso97971',
  },
]
