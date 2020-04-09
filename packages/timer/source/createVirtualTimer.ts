import { Disposable } from '@typed/disposable'
import { Arity1 } from '@typed/lambda'
import { createVirtualClock } from './createVirtualClock'
import { Timeline } from './Timeline'
import { VirtualClock, VirtualTimer } from './types'

/**
 * Create a VirtualTimer. Useful for testing.
 * @param startingTime (optional) :: number
 */
export function createVirtualTimer(clock: VirtualClock = createVirtualClock()): VirtualTimer {
  const timeline = new Timeline()

  function delay(f: Arity1<number>, delayMS: number): Disposable {
    const time = clock.currentTime() + delayMS

    timeline.addTask(time, f)

    return { dispose: () => timeline.removeTask(time, f) }
  }

  function runTasks() {
    const currentTime = clock.currentTime()
    const tasks = timeline.readyTasks(currentTime)

    tasks.forEach((task) => task(currentTime))
  }

  return {
    ...clock,
    delay,
    progressTimeBy: (delay) => {
      clock.progressTimeBy(delay)
      runTasks()
    },
  }
}
