import { chain, Env } from '@typed/env'
import { apply } from '@typed/lambda'
import {
  Effect,
  EffectIterator,
  EffectIteratorResult,
  EffectResources,
  EffectValue,
} from './Effect'
import { startEffect } from './startEffect'

export const runEffect = <A = {}, B = void>(effect: Effect<A, B>): Env<A, B> =>
  chain(
    iterator => runEffectIterator(iterator, iterator.next() as EffectIteratorResult<Effect<A, B>>),
    startEffect(effect),
  )

const runEffectIterator = <A extends Effect<any, any>>(
  iterator: EffectIterator<A>,
  result: EffectIteratorResult<A>,
): Env<EffectResources<A>, EffectValue<A>> =>
  result.done
    ? Env.create<EffectResources<A>, EffectValue<A>>(apply([result.value]))
    : chain(
        value => runEffectIterator<A>(iterator, iterator.next(value) as EffectIteratorResult<A>),
        result.value,
      )
