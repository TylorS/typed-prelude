import { ComparableValues } from '@typed/lambda'
import * as G from '../guard'
import { Type } from './Type'

export function literal<A extends ComparableValues>(
  value: A,
  name: string = typeof value,
): Type<A> {
  return Type.fromGuard(G.literal(value), name)
}
