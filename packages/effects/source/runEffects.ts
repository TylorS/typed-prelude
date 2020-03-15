import { EmptyObject } from '@typed/common'
import { Disposable } from '@typed/disposable'
import { execPure, provide, Pure } from '@typed/env'
import { Capabilities, Effects, Return } from './Effect'
import { runEffect } from './runEffect'

export function runEffects<A extends Effects<EmptyObject, any>>(effect: A): Disposable
export function runEffects<A extends Effects<any, any>>(
  effect: A,
  resources: Capabilities<A>,
): Disposable

export function runEffects<A extends Effects<any, any>>(
  effect: A,
  resources: Capabilities<A> = {} as Capabilities<A>,
): Disposable {
  return execPure(provide(runEffect(effect), resources) as Pure<Return<A>>)
}
