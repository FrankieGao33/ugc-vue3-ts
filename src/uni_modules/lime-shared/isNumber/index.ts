// @ts-nocheck
/**判断是不是数字字符*/
export function isNumber(value: string) {
  return /^\d+(\.\d+)?$/.test(value);
}