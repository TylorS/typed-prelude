import { Effect, Effects } from '@typed/effects'
import { Either } from '@typed/either'
import { Future } from '@typed/future'

export function* useFuture<E, A, B>(future: Future<E, A, B>): Effects<E, Either<A, B>> {
  return yield* Effect.fromEnv(future)
}
