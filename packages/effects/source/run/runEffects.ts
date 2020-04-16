import { Disposable } from '@typed/disposable'
import { provide, runPure } from '@typed/env'
import { Capabilities, Effects, PureEffect, Return } from '../Effect'
import { runEffect } from './runEffect'

export function runEffects<A extends PureEffect<any>>(effect: A): Disposable

export function runEffects<A extends Effects<any, any>>(
  effect: A,
  resources: Capabilities<A>,
  onReturn?: (value: Return<A>) => Disposable,
): Disposable

export function runEffects<A extends Effects<any, any>>(
  effect: A,
  resources: Capabilities<A> = {} as Capabilities<A>,
  onReturn?: (value: Return<A>) => Disposable,
): Disposable {
  return runPure(
    (a) => (onReturn ? onReturn(a) : Disposable.None),
    provide(runEffect(effect), resources),
  )
}
