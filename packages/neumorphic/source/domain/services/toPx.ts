import { NonNegativeInteger } from '@typed/new-type'

export function toPx(n: NonNegativeInteger): string {
  return n === 0 ? `0` : `${n}px`
}
