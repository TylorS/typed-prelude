import { Disposable, onDisposed } from '@typed/disposable'
import { Timer } from '@typed/timer'
import { RafEnv } from './raf'

export function createTestRafEnv(timer: Timer, delayMs: number = 1): RafEnv {
  let nextId = 0
  const timers = new Map<number, Disposable>()

  function requestAnimationFrame(f: FrameRequestCallback) {
    const id = nextId++
    const disposable = timer.delay(() => (f(timer.currentTime()), Disposable.None), delayMs)

    timers.set(
      id,
      onDisposed(() => timers.delete(id), disposable),
    )

    return id
  }

  function cancelAnimationFrame(handle: number) {
    timers.get(handle)?.dispose()
  }

  return { requestAnimationFrame, cancelAnimationFrame }
}
