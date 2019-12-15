import { Disposable } from '@typed/disposable'
import { Env, execPure, handle } from '@typed/env'
import { Effect, EffectResources } from './Effect'
import { runEffect } from './runEffect'

export function runEffects<A extends Env<any, any>, B>(
  effect: Effect<A, B, any>,
  resources: EffectResources<typeof effect>,
): Disposable {
  return execPure(handle(resources, runEffect(effect)))
}
