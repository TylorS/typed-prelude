import * as D from '../decoder'
import * as E from '../encoder'
import * as G from '../guard'
import { Type } from './Type'

export interface TupleType<A extends ReadonlyArray<Type>>
  extends Type<
    { readonly [K in keyof A]: Type.Of<A[K]> },
    { readonly [K in keyof A]: Type.Encoding<A[K]> }
  > {
  readonly members: A
}

export const tuple = <A extends ReadonlyArray<Type>>(members: A): TupleType<A> => {
  const g = G.tuple(members)
  const d = D.tuple(members)
  const e = E.tuple(members)

  return {
    ...g,
    ...d,
    ...e,
    name: d.expected,
    members,
  } as TupleType<A>
}
