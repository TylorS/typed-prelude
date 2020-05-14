import { schedulerRelativeTo } from '@most/scheduler'
import { Disposable, Sink, Stream } from '@most/types'
import { get, TimerEnv } from '@typed/effects'
import { HookEffects, HooksManagerEnv, useEffect } from '@typed/hooks'
import { SchedulerEnv } from '../SchedulerEnv'

/**
 * Run a Stream<A> with a given Sink<A> whilst creating a relative scheduler
 * for each new stream invocation.
 */
export function* useRunStream<A>(
  stream: Stream<A>,
  sink: Sink<A>,
): HookEffects<SchedulerEnv & HooksManagerEnv & TimerEnv, Disposable> {
  const { scheduler } = yield* get()

  return yield* useEffect(
    (stream, sink) => stream.run(sink, schedulerRelativeTo(scheduler.currentTime(), scheduler)),
    [stream, sink] as const,
  )
}
