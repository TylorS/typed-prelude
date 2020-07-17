import { Effect, Effects, get, TimerEnv } from '@typed/effects'
import { Resume } from '@typed/env'
import { RequestIdleCallbackDeadline, whenIdleWithTimeout } from '@typed/timer'

export function* requestIdleCallback(
  timeout: number = Number.MAX_SAFE_INTEGER,
): Effects<TimerEnv, RequestIdleCallbackDeadline> {
  const { timer } = yield* get<TimerEnv>()

  return yield* Effect.fromEnv((_) =>
    Resume.create<RequestIdleCallbackDeadline>((cb) => whenIdleWithTimeout(cb, timeout, timer)),
  )
}
