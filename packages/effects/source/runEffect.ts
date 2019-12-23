import { chain, Env } from '@typed/env'
import {
  Effect,
  EffectIterator,
  EffectIteratorResult,
  EffectResources,
  EffectValue,
} from './Effect'
import { startEffect } from './startEffect'

export const runEffect = <A extends Effect<Env<any, any>, any, any>>(
  effect: A,
): Env<EffectResources<A>, EffectValue<A>> => {
  const iterator = startEffect(effect)

  return runIterator(iterator, iterator.next() as EffectIteratorResult<A>)
}

const runIterator = <A extends Effect<Env<any, any>, any, any>>(
  iterator: EffectIterator<A>,
  result: EffectIteratorResult<A>,
): Env<EffectResources<A>, EffectValue<A>> =>
  result.done
    ? (Env.of(result.value) as Env<EffectResources<A>, EffectValue<A>>)
    : chain(
        value => runIterator(iterator, iterator.next(value) as EffectIteratorResult<A>),
        result.value,
      )
