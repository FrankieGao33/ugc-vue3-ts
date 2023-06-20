// @ts-nocheck
import {isNumber} from '../isNumber'
import {isDef} from '../isDef'
/** 加单位 */
export function addUnit(value?: string | number): string | undefined {
  if (!isDef(value)) {
    return undefined;
  }

  value = String(value);
  return isNumber(value) ? `${value}px` : value;
}