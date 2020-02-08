import { Effect } from '@typed/effects'
import { Either } from '@typed/either'
import { Future } from '@typed/future'
import { HookEffects } from './HookEffects'

export function* useFuture<E, A, B>(future: Future<E, A, B>): HookEffects<E, Either<A, B>> {
  return yield* Effect.fromEnv(future)
}
