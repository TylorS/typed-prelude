import { Effects } from '@typed/effects'
import { Resume } from '@typed/env'

export interface PatchEnv<A, B> {
  readonly patch: (previous: A, value: B) => Resume<A>
}

export function* patch<A, B>(previous: A, renderable: B): Effects<PatchEnv<A, B>, A> {
  return yield c => c.patch(previous, renderable)
}
