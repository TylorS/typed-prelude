import { Effect, get } from '@typed/effects'
import { Either } from '@typed/either'
import { handle, Pure } from '@typed/env'
import { Future } from '@typed/future'
import { HookEnvironment } from './HookEnvironment'
import { useMemo } from './useMemo'
import { WithHookEnvs } from './WithHookEnvs'

const createEffect = <E, A, B>(
  resources: E,
  future: Future<E, A, B>,
): Effect<Pure<Either<A, B>>, Either<A, B>, Either<A, B>> =>
  Effect.fromEnv(handle(resources, future))

export function* useFuture<E, A, B>(
  future: Future<E, A, B>,
): Generator<WithHookEnvs<E>, Either<A, B>, E & HookEnvironment & Either<A, B>> {
  const resources = yield* get<E>()
  const effect = yield* useMemo(createEffect, [resources, future])

  return yield* effect
}
