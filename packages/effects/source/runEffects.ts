import { Disposable } from '@typed/disposable'
import { execPure, handle } from '@typed/env'
import { EffectResources, Effects } from './Effect'
import { runEffect } from './runEffect'

export function runEffects<A extends Effects<never, any>>(effect: A): Disposable
export function runEffects<A extends Effects<any, any>>(
  effect: A,
  resources: EffectResources<A>,
): Disposable

export function runEffects<A extends Effects<any, any>>(
  effect: A,
  resources: EffectResources<A> = {} as EffectResources<A>,
): Disposable {
  return execPure(handle(resources, runEffect(effect)))
}
