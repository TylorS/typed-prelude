import { ComparableValues } from '@typed/lambda'
import * as G from '../guard'
import { Type } from './Type'

export interface LiteralType<A> extends Type<A> {
  readonly value: A
}

export function literal<A extends ComparableValues>(
  value: A,
  name: string = typeof value,
): LiteralType<A> {
  return { ...Type.fromGuard(G.literal(value), name), value }
}
