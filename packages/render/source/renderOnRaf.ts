import { combine } from '@typed/effects'
import { getHookEnv, HookEffects } from '@typed/hooks'
import { raf, RafEnv } from './raf'
import { render, RenderEnv } from './Render'

export function* renderOnRaf<A, B>(
  fn: () => HookEffects<A, B>,
): HookEffects<A & RafEnv & RenderEnv<B, any>, never> {
  const env = yield* getHookEnv()

  yield* combine(env.clearUpdated(), env.resetId())
  yield* render(yield* fn())
  yield* combine(env.resetId(), env.clearUpdated())

  while (true) {
    yield* raf()

    if (env.updated) {
      yield* render(yield* fn())
      yield* combine(env.resetId(), env.clearUpdated())
    }
  }
}
