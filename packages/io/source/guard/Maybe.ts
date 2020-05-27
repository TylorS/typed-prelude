import { fromJust, isJust, isNothing, Maybe } from '@typed/maybe'
import { Record } from '../types'
import { Guard } from './Guard'
import { refinement } from './refinement'

const _Maybe = refinement(
  Record,
  (m): m is Maybe<unknown> => isNothing(m as any) || isJust(m as any),
)

export { _Maybe as Maybe }

export const maybe = <A>(guard: Guard<A>): Guard<Maybe<A>> =>
  refinement(_Maybe, (m): m is Maybe<A> => isNothing(m) || guard.is(fromJust(m)))
