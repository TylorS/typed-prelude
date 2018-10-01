import { Disposable, Scheduler } from '@most/types'
import { EffectResources } from '../effect'
import { fromLeft, fromRight, isLeft } from '../either'
import { Arity1, curry } from '../lambda'
import { Future } from './Future'

export const fork: {
  <A, B>(left: Arity1<A>, right: Arity1<B>, scheduler: Scheduler, future: Future<A, B>): Disposable
  <A, B>(left: Arity1<A>, right: Arity1<B>, scheduler: Scheduler): (
    future: Future<A, B>,
  ) => Disposable
  <A, B>(left: Arity1<A>, right: Arity1<B>): {
    (scheduler: Scheduler, future: Future<A, B>): Disposable
    (scheduler: Scheduler): (future: Future<A, B>) => Disposable
  }
  <A, B>(left: Arity1<A>): {
    (right: Arity1<B>, scheduler: Scheduler, future: Future<A, B>): Disposable
    (right: Arity1<B>, scheduler: Scheduler): (future: Future<A, B>) => Disposable
    (right: Arity1<B>): {
      (scheduler: Scheduler, future: Future<A, B>): Disposable
      (scheduler: Scheduler): (future: Future<A, B>) => Disposable
    }
  }
} = curry(__fork)

function __fork<A, B, C extends {} = {}>(
  left: Arity1<A>,
  right: Arity1<B>,
  resources: EffectResources<C>,
  future: Future<A, B>,
): Disposable {
  return future.runEffect(
    either => (isLeft(either) ? left(fromLeft(either)) : right(fromRight(either))),
    resources,
  )
}
