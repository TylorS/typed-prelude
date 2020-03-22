import { Disposable } from '@typed/disposable'
import { RafEnv } from '@typed/dom'
import { Timer } from '@typed/timer'

export function createTestRafEnv(timer: Timer): RafEnv {
  let nextId = 0
  const timers = new Map<number, Disposable>()

  function requestAnimationFrame(f: FrameRequestCallback) {
    const id = nextId++
    const disposable = timer.delay(() => (f(timer.currentTime()), Disposable.None), 0)

    timers.set(id, disposable)

    return id
  }

  function cancelAnimationFrame(handle: number) {
    timers.get(handle)?.dispose()
  }

  return { requestAnimationFrame, cancelAnimationFrame }
}
