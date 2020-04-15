import { getHookEnv, HookEffects, runWithHooks } from '@typed/hooks'
import { patch, PatchEnv } from './Patch'
import { raf, RafEnv } from './raf'

export function* patchOnRaf<A, B, C>(
  fn: () => HookEffects<A, B>,
  initial: C,
): HookEffects<A & RafEnv & PatchEnv<C, B>, never> {
  const env = yield* getHookEnv()

  let previous = yield* patch(initial, yield* runWithHooks(fn(), env))

  while (true) {
    yield* raf()

    if (env.updated) {
      previous = yield* patch(previous, yield* runWithHooks(fn(), env))
    }
  }
}
