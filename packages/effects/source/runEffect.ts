import { chain, Env } from '@typed/env'
import { Effect, EffectIterator, EffectIteratorResult, EffectResources, Return } from './Effect'
import { startEffect } from './startEffect'

export const runEffect = <A extends Generator<any | never, any, any>>(
  effect: A,
): Env<EffectResources<A>, Return<A>> =>
  chain(
    iterator => runEffectIterator<A>(iterator, iterator.next() as EffectIteratorResult<A>),
    startEffect<A>(effect),
  )

const runEffectIterator = <A extends Effect<never, any>>(
  iterator: EffectIterator<A>,
  result: EffectIteratorResult<A>,
): Env<EffectResources<A>, Return<A>> =>
  result.done
    ? Env.create<EffectResources<A>, Return<A>>(cb => cb(result.value))
    : chain(
        value => runEffectIterator<A>(iterator, iterator.next(value) as EffectIteratorResult<A>),
        result.value,
      )
