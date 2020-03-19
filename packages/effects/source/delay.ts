import { Resume } from '@typed/env'
import { Timer } from '@typed/timer'
import { Effect } from './Effect'

export type TimerEnv = { readonly timer: Timer }

export function delay(ms: number): Effect<TimerEnv, number> {
  return Effect.fromEnv(({ timer }) => Resume.create(cb => timer.delay(cb, ms)))
}
