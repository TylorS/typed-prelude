import { Disposable } from '@typed/disposable'
import { Arity1, IO } from '@typed/lambda'
import { createVirtualClock } from './createVirtualClock'
import { VirtualTimer } from './types'

export function createVirtualTimer(startingTime: number = 0): VirtualTimer {
  const tasks: Map<number, Array<Arity1<number>>> = new Map()
  const clock = createVirtualClock(startingTime)

  function removeTask(time: number, f: Arity1<number>) {
    const tasksAtTime = tasks.get(time)

    if (!tasksAtTime) {
      return
    }

    const index = tasksAtTime.findIndex(x => x === f)

    if (index > -1) {
      tasksAtTime.splice(index)
    }

    if (tasksAtTime.length === 0) {
      tasks.delete(time)
    }
  }

  function addTask(time: number, f: Arity1<number>) {
    const tasksAtTime = tasks.get(time) || []

    tasksAtTime.push(f)

    tasks.set(time, tasksAtTime)
  }

  function runTasksAtTime(time: number) {
    const tasksAtTime = tasks.get(time)

    while (tasksAtTime && tasksAtTime.length > 0) {
      const f = tasksAtTime.shift() as IO

      f()
    }

    tasks.delete(time)
  }

  function timesToRun(currentTime: number) {
    const times = Array.from(tasks.keys())

    return times.filter(x => x <= currentTime).sort()
  }

  function delay(f: Arity1<number>, delayMS: number): Disposable {
    const time = clock.currentTime() + delayMS

    addTask(time, f)

    return { dispose: () => removeTask(time, f) }
  }

  function runTasks() {
    const currentTime = clock.currentTime()
    const times = timesToRun(currentTime)

    times.forEach(runTasksAtTime)
  }

  return {
    ...clock,
    delay,
    timePast: delay => {
      clock.timePast(delay)
      runTasks()
    },
  }
}
