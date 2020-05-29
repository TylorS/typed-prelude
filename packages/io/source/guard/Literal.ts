import { ComparableValues } from '@typed/lambda'
import { Guard } from './Guard'

export function literal<A extends ReadonlyArray<ComparableValues>>(...values: A): Guard<A[number]> {
  return {
    is: (u: unknown): u is A[number] => values.findIndex((a) => a === u) !== -1,
  }
}
