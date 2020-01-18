import { Effect, get } from '@typed/effects'
import { handle } from '@typed/env'
import { Future } from '@typed/future'
import { useMemo } from './useMemo'

const createEffect = <E, A, B>(resources: E, future: Future<E, A, B>) =>
  Effect.fromEnv(handle(resources, future))

export function* useFuture<E, A, B>(future: Future<E, A, B>) {
  const resources = yield* get<E>()
  const effect = yield* useMemo(createEffect, [resources, future])

  return yield* effect
}
