/**
 * 简单数组去重
 * @param array
 */
export const uniq = (array: string[]): string[] => Array.from(new Set(array))
