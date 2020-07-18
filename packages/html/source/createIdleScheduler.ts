import { Effects, TimerEnv } from '@typed/effects'
import { fromJust, isJust, isNothing } from '@typed/maybe'
import { requestIdleCallback } from '@typed/render'
import { FifoQueue } from './FifoQueue'

export type IdleScheduler = ReturnType<typeof createIdleScheduler>

export function createIdleScheduler<E, A>(queue: FifoQueue<A>, f: (value: A) => Effects<E, void>) {
  let scheduled = false

  function* scheduleNextRun(): Effects<E & TimerEnv, void> {
    if (scheduled) {
      return
    }

    scheduled = true

    const deadline = yield* requestIdleCallback()
    const timeRemaining = () => deadline.timeRemaining() > 0 || deadline.didTimeout

    while (timeRemaining()) {
      const next = queue.dequeue()

      if (isNothing(next)) {
        break
      }

      yield* f(fromJust(next))

      if (isNothing(queue.peek())) {
        break
      }
    }

    if (isJust(queue.peek())) {
      return yield* scheduleNextRun()
    }

    scheduled = false
  }

  return {
    get scheduled() {
      return scheduled
    },
    scheduleNextRun,
  } as const
}
