import { chain, Env } from '@typed/env'
import { Effect, EffectIterator, EffectIteratorResult } from './Effect'
import { startEffect } from './startEffect'

export const runEffect = <A, B>(effect: Effect<A, B>): Env<A, B> =>
  chain(iterator => runEffectIterator<A, B>(iterator, iterator.next()), startEffect(effect))

const runEffectIterator = <A, B>(
  iterator: EffectIterator<Effect<A, B>>,
  result: EffectIteratorResult<Effect<A, B>>,
): Env<A, B> =>
  result.done
    ? Env.create<A, B>(cb => cb(result.value))
    : chain(
        value =>
          runEffectIterator<A, B>(
            iterator,
            iterator.next(value) as EffectIteratorResult<Effect<A, B>>,
          ),
        result.value,
      )
