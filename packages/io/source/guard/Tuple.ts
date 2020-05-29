import { Array } from './Array'
import { Guard, TypeOf } from './Guard'
import { refinement } from './refinement'

export const tuple = <A extends ReadonlyArray<Guard>>(
  types: A,
): Guard<{ readonly [K in keyof A]: TypeOf<A[K]> }> =>
  refinement(
    Array,
    (a): a is { readonly [K in keyof A]: TypeOf<A[K]> } =>
      a.length === types.length && a.every((v, i) => types[i].is(v)),
  )
