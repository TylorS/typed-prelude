import { getHookEnv, HookEffects, runWithHooks } from '@typed/hooks'
import { patch, PatchEnv } from './Patch'
import { raf, RafEnv } from './raf'

export function* patchOnRaf<A, B, C, E = any>(
  fn: () => HookEffects<A, B>,
  initial: C,
): HookEffects<A & RafEnv & PatchEnv<C, B, E>, never> {
  const env = yield* getHookEnv()

  let updating = false
  let previous = yield* patch(initial, yield* runWithHooks(fn(), env))

  while (true) {
    yield* raf()

    if (!updating && env.updated) {
      updating = true
      previous = yield* patch(previous, yield* runWithHooks(fn(), env))
      updating = false
    }
  }
}
