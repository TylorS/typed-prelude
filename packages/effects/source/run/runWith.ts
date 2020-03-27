import { Provide, provide } from '@typed/env'
import { Effect, Effects, Return, Yield } from '../Effect'
import { runEffect } from './runEffect'

export type RunWith<E extends Effects<any, any>, C> = Effect<Provide<Yield<E>, C>, Return<E>>

export function* runWith<A extends Effects<any, any>, C>(
  effect: A,
  capabilities: C,
): RunWith<A, C> {
  return yield provide(runEffect(effect), capabilities)
}
