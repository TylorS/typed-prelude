import { combine } from '@typed/effects'
import { getHookEnv, HookEffects } from '@typed/hooks'
import { patch, PatchEnv } from './Patch'
import { raf, RafEnv } from './raf'

export function* patchOnRaf<A, B, C>(
  fn: () => HookEffects<A, B>,
  initial: C,
): HookEffects<A & RafEnv & PatchEnv<C, B>, never> {
  const env = yield* getHookEnv()

  yield* combine(env.clearUpdated(), env.resetId())
  let previous = yield* patch(initial, yield* fn())
  yield* combine(env.resetId(), env.clearUpdated())

  while (true) {
    yield* raf()

    if (env.updated) {
      previous = yield* patch(previous, yield* fn())
      yield* combine(env.resetId(), env.clearUpdated())
    }
  }
}
