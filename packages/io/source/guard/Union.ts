import { any } from '@typed/logic'
import { Guard, TypeOf } from './Guard'

export const union = <A extends ReadonlyArray<Guard<any>>>(
  guards: A,
): Guard<TypeOf<A[number]>> => ({
  is: (u): u is TypeOf<A[number]> => any((g) => g.is(u), guards),
})
