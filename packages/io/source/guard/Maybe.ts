import { isObject } from '@typed/logic'
import { fromJust, isJust, isNothing, Maybe } from '@typed/maybe'
import { Guard } from './Guard'
import { refinement } from './refinement'

const _Maybe = {
  is: (u: unknown): u is Maybe<unknown> => (isObject(u) && isNothing(u as any)) || isJust(u as any),
}

export { _Maybe as Maybe }

export const maybe = <A>(guard: Guard<A>): Guard<Maybe<A>> =>
  refinement(_Maybe, (m): m is Maybe<A> => isNothing(m) || guard.is(fromJust(m)))
