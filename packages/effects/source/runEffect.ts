import { chain, Env } from '@typed/env'
import { Resume } from '@typed/env/source/Resume'
import { Capabilities, Effect, IteratorResultOf, Return } from './Effect'
import { Failure } from './Failure'
import { startEffect } from './startEffect'

export const runEffect = <A extends Effect<any, any>>(effect: A): Env<Capabilities<A>, Return<A>> =>
  chain(
    iterator => runEffectIterator<A>(iterator, iterator.next() as IteratorResultOf<A>),
    startEffect<A>(effect),
  )

const runEffectIterator = <A extends Effect<any, any>>(
  generator: A,
  result: IteratorResultOf<A>,
): Env<Capabilities<A>, Return<A>> =>
  result.done
    ? (_: Capabilities<A>) => Resume.of(result.value)
    : chain(
        value =>
          runEffectIterator<A>(
            generator,
            (value instanceof Failure
              ? generator.return(value.value)
              : generator.next(value)) as IteratorResultOf<A>,
          ),
        result.value,
      )
