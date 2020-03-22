import { Effects } from '@typed/effects'
import { getHookEnv, HookEffects, HookEnv } from '@typed/hooks'
import { raf, RafEnv } from './raf'
import { render, RenderEnv } from './Render'

export function* renderOnRaf<A, B>(
  fn: () => HookEffects<A, B>,
): Effects<HookEnv & A & RafEnv & RenderEnv<B, any>, never> {
  yield* render(yield* fn())

  while (true) {
    yield* raf()

    const env = yield* getHookEnv()

    if (env.updated) {
      yield* render(yield* fn())
    }
  }
}
