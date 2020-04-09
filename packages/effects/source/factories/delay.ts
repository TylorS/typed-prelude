import { Resume } from '@typed/env'
import { Timer } from '@typed/timer'
import { Effect, Effects } from '../Effect'

export type TimerEnv = { readonly timer: Timer }

export const delay = (ms: number): Effects<TimerEnv, number> =>
  Effect.fromEnv(({ timer }) => Resume.create((cb) => timer.delay(cb, ms)))
