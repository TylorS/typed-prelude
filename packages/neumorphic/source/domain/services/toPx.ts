import { NonNegativeInteger } from '@typed/new-type'

export function toPx(n: NonNegativeInteger): string
export function toPx(
  n: NonNegativeInteger,
  // tslint:disable-next-line:unified-signatures
  scale: 1 | 2 | 3 | 4 | 5 | 6 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16,
): string
// tslint:disable-next-line:unified-signatures
export function toPx(n: NonNegativeInteger, scale: number): string

export function toPx(n: NonNegativeInteger, scale: 1 | 2 | 3 | 4 | 5 | number = 1): string {
  return n === 0 ? `0` : `${n * scale}px`
}
