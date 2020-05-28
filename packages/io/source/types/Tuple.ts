import * as D from '../decoder'
import * as E from '../encoder'
import * as G from '../guard'
import { Type } from './Type'

export const tuple = <A extends ReadonlyArray<Type>>(
  types: A,
): Type<
  { readonly [K in keyof A]: Type.Of<A[K]> },
  { readonly [K in keyof A]: Type.Encoding<A[K]> }
> => {
  const g = G.tuple(types)
  const d = D.tuple(types)
  const e = E.tuple(types)

  return {
    ...g,
    ...d,
    ...e,
    name: d.expected,
  } as Type<
    { readonly [K in keyof A]: Type.Of<A[K]> },
    { readonly [K in keyof A]: Type.Encoding<A[K]> }
  >
}
