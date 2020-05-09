import { Effect, Effects } from '@typed/effects'

export interface PatchEnv<A, B, E = any> {
  readonly patch: (previous: A, value: B) => Effects<E, A>
}

export function patch<E, A, B>(previous: A, renderable: B): Effects<E & PatchEnv<A, B>, A> {
  return Effect.withEnv(function* ({ patch }) {
    return yield* patch(previous, renderable)
  })
}
