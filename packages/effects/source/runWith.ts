import { Env, Provide, provide, Pure } from '@typed/env'
import { runEffect } from './runEffect'

export function* runWith<Y extends Pure<any> | Env<any, any>, R, N, C>(
  effect: Generator<Y, R, N>,
  capabilities: C,
): Generator<Provide<Y, C>, R, R> {
  const env: Provide<Y, C> = provide(runEffect(effect), capabilities) as any

  return yield env
}
