import { asap } from '@most/scheduler'
import { Disposable } from '@most/types'
import { Effect, EffectResources } from '@typed/effect'
import { callbackTask } from '@typed/effect/callbackTask'
import { Either, unpack } from '@typed/either'
import { apply, Arity1, Arity3, pipe } from '@typed/lambda'

export interface Future<A, B, C extends {} = {}> extends Effect<Either<A, B>, C> {}

export namespace Future {
  export const create = <A, B, C extends {} = {}>(
    fn: Arity3<Arity1<A>, Arity1<B>, EffectResources<C>, Disposable>,
  ): Future<A, B, C> =>
    Effect.create<Either<A, B>, C>((cb, resources) => {
      const { scheduler } = resources
      let resolved = false
      const resolve = (): void => ((resolved = true), void 0)
      const left = pipe(
        (a: A) => Either.left<A, B>(a),
        x => !resolved && cb(x, scheduler.currentTime()),
        resolve,
      )
      const right = pipe(
        (b: B) => Either.of<B, A>(b),
        x => !resolved && cb(x, scheduler.currentTime()),
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

  export const fromEither = <A, B>(either: Either<A, B>): Future<A, B> =>
    unpack<A, B, Future<A, B>>(Future.reject, Future.of, either)
}
