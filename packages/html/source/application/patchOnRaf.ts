import { getHookEnv, HookEffects, runWithHooks } from '@typed/hooks'
import { patch, PatchEnv, raf, RafEnv } from '@typed/render'
import { EnvOf, VNode } from '../domain'
import { elementToVNode } from '../infrastructure'

export function* patchOnRaf<E, A extends VNode>(
  fn: () => HookEffects<E, A>,
  rootElement: HTMLElement,
): HookEffects<E & EnvOf<A> & RafEnv & PatchEnv<VNode, A>, never> {
  const initial = yield* elementToVNode(rootElement)
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
