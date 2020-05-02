import { Effect, Effects } from '@typed/effects'

export interface PatchEnv<A, B> {
  readonly patch: (previous: A, value: B) => Effects<any, A>
}

export function patch<A, B>(previous: A, renderable: B): Effects<PatchEnv<A, B>, A> {
  return Effect.withEnv(function* ({ patch }) {
    return yield* patch(previous, renderable)
  })
}
