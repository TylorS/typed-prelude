import { Disposable } from '@typed/disposable'
import { execPure, handle, Pure } from '@typed/env'
import { Effect, EffectResources } from './Effect'
import { runEffect } from './runEffect'

export function runEffects<A extends Effect<Pure, any, any>>(
  effect: A,
  resources: EffectResources<A>,
): Disposable {
  return execPure(handle(resources, runEffect(effect)))
}
