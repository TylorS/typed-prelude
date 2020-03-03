import { Disposable } from '@typed/disposable'
import { execPure, handle } from '@typed/env'
import { Effect, EffectResources } from './Effect'
import { runEffect } from './runEffect'

export function runEffects<A extends Effect<never, any>>(effect: A): Disposable
export function runEffects<A extends Effect<any, any>>(
  effect: A,
  resources: EffectResources<A>,
): Disposable

export function runEffects<A extends Effect<any, any>>(
  effect: A,
  resources: EffectResources<A> = {} as EffectResources<A>,
): Disposable {
  return execPure(handle(resources, runEffect(effect)))
}
