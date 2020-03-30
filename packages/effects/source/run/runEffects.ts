import { Disposable } from '@typed/disposable'
import { execPure, provide } from '@typed/env'
import { Capabilities, Effects, PureEffect } from '../Effect'
import { runEffect } from './runEffect'

export function runEffects<A extends PureEffect<any>>(effect: A): Disposable

export function runEffects<A extends Effects<any, any>>(
  effect: A,
  resources: Capabilities<A>,
): Disposable

export function runEffects<A extends Effects<any, any>>(
  effect: A,
  resources: Capabilities<A> = {} as Capabilities<A>,
): Disposable {
  return execPure(provide(runEffect(effect), resources as any))
}
