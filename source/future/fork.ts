import { Disposable } from '@most/types'
import { EffectResources } from '../effect'
import { fromLeft, fromRight, isLeft } from '../either'
import { Arity1, curry } from '../lambda'
import { Future } from './Future'

export const fork: {
  <A, B, C extends {} = {}>(
    left: Arity1<A>,
    right: Arity1<B>,
    resources: EffectResources<C>,
    future: Future<A, B, C>,
  ): Disposable

  <A, B, C extends {} = {}>(left: Arity1<A>, right: Arity1<B>, resources: EffectResources<C>): (
    future: Future<A, B, C>,
  ) => Disposable

  <A, B>(left: Arity1<A>, right: Arity1<B>): {
    <C extends {} = {}>(resources: EffectResources<C>, future: Future<A, B, C>): Disposable
    <C extends {} = {}>(resources: EffectResources<C>): (future: Future<A, B, C>) => Disposable
  }

  <A, B, C extends {} = {}>(left: Arity1<A>): {
    (right: Arity1<B>, resources: EffectResources<C>, future: Future<A, B, C>): Disposable
    (right: Arity1<B>, resources: EffectResources<C>): (future: Future<A, B, C>) => Disposable
    (right: Arity1<B>): {
      (resources: EffectResources<C>, future: Future<A, B, C>): Disposable
      (resources: EffectResources<C>): (future: Future<A, B, C>) => Disposable
    }
  }
} = curry(__fork)

function __fork<A, B, C extends {} = {}>(
  left: Arity1<A>,
  right: Arity1<B>,
  resources: EffectResources<C>,
  future: Future<A, B, C>,
): Disposable {
  return future.runEffect(
    either => (isLeft(either) ? left(fromLeft(either)) : right(fromRight(either))),
    resources,
  )
}
