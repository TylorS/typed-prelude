import { asap } from '@most/scheduler'
import { Disposable } from '@most/types'
import { Effect, EffectResources } from '../effect'
import { callbackTask } from '../effect/callbackTask'
import { Either } from '../either'
import { apply, Arity1, Arity3, pipe } from '../lambda'

export interface Future<A, B, C extends {} = {}> extends Effect<Either<A, B>, C> {}

export namespace Future {
  export const create = <A, B, C extends {} = {}>(
    fn: Arity3<Arity1<A>, Arity1<B>, EffectResources<C>, Disposable>,
  ): Future<A, B, C> =>
    Effect.create<Either<A, B>, C>((cb, resources) => {
      const { scheduler } = resources
      let resolved = false
      const resolve = (): void => ((resolved = true), void 0)
      const left: <A>(value: A) => void = pipe(
        Either.left,
        x => !resolved && cb(x as Either<A, B>, scheduler.currentTime()),
        resolve,
      )
      const right: <B>(value: B) => void = pipe(
        Either.of,
        x => !resolved && cb(x as Either<A, B>, scheduler.currentTime()),
        resolve,
      )

      return asap(callbackTask<any>(apply([left, right, resources]), fn), scheduler)
    })

  export const of = <A, B = unknown>(value: A): Future<B, A> => Effect.of(Either.of(value))
  export const reject = <A, B = unknown>(value: A): Future<A, B> =>
    Effect.of(Either.left<A, B>(value))

  export const fromPromise = <A, B = unknown>(f: () => Promise<A>): Future<B, A> =>
    Future.create((reject, resolve, { scheduler }) =>
      asap(callbackTask(f => f().then(resolve, reject), f), scheduler),
    )
}
