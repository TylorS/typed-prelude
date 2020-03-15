import { chain, Env } from '@typed/env'
import { Resume } from '@typed/env/source/Resume'
import { Capabilities, Effect, IteratorOf, IteratorResultOf, Return } from './Effect'
import { startEffect } from './startEffect'

export const runEffect = <A extends Effect<any, any>>(effect: A): Env<Capabilities<A>, Return<A>> =>
  chain(
    iterator => runEffectIterator<A>(iterator, iterator.next() as IteratorResultOf<A>),
    startEffect<A>(effect),
  )

const runEffectIterator = <A extends Effect<any, any>>(
  iterator: IteratorOf<A>,
  result: IteratorResultOf<A>,
): Env<Capabilities<A>, Return<A>> =>
  result.done
    ? (_: Capabilities<A>) => Resume.of(result.value)
    : chain(
        value => runEffectIterator<A>(iterator, iterator.next(value) as IteratorResultOf<A>),
        result.value,
      )
