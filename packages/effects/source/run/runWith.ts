import { CapabilitiesOf, provide, Provide } from '@typed/env'
import { OrToAnd } from '@typed/lambda'
import { Capabilities, Effect, Effects, PureEffect, Return, Yield } from '../Effect'
import { runEffect } from './runEffect'

export type RunWith<A extends Effects<any, any>, C> = C extends Capabilities<A>
  ? PureEffect<Return<A>>
  : Effects<OrToAnd<CapabilitiesOf<Provide<Yield<A>, C>>>, Return<A>>

export function runWith<A extends Effects<any, any>, C>(effect: A, capabilities: C): RunWith<A, C> {
  return Effect.fromEnv(provide(runEffect(effect), capabilities)) as RunWith<A, C>
}
