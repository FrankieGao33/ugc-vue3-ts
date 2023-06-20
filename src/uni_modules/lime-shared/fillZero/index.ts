// @ts-nocheck
/**
 * 补0
 * @param number
 * @returns
 */

export function fillZero(number: number, isMillieconds = false): string | number {
	if(isMillieconds) {
		return `${number}`.padStart(3, '0')
	}
	return `${number}`.padStart(2, '0')
}