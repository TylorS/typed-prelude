import { isBrowser } from '@typed/common'
import { Disposable } from '@typed/disposable'
import { Arity2 } from '@typed/lambda'
import { Timer } from './types'

type RequestIdleCallbackHandle = any
type RequestIdleCallbackOptions = {
  timeout: number
}

export type RequestIdleCallbackDeadline = {
  readonly didTimeout: boolean
  timeRemaining: () => number
}

declare global {
  interface Window {
    requestIdleCallback: (
      callback: (deadline: RequestIdleCallbackDeadline) => void,
      opts?: RequestIdleCallbackOptions,
    ) => RequestIdleCallbackHandle
    cancelIdleCallback: (handle: RequestIdleCallbackHandle) => void
  }
}

/**
 * Attempts to schedule a task to be performed when the event queue is clear.
 * @param fn :: ({ didTimeout:: boolean; timeRemaining :: (* -> number) } -> number -> *)
 * @param timer :: Timer
 * @returns Disposable
 */
export function whenIdle(
  fn: Arity2<RequestIdleCallbackDeadline, number>,
  timer: Timer,
): Disposable {
  return whenIdleWithTimeout(fn, Number.MAX_SAFE_INTEGER, timer)
}

/**
 * Run a function when idle when in a browser falling back to
 * a specified timeout within node.
 *
 * @param fn :: (RequestIdleCallbackDeadline -> number -> *)
 * @param timeout :: number
 * @param timer :: Timer
 * @returns Disposable
 */
export function whenIdleWithTimeout(
  fn: Arity2<RequestIdleCallbackDeadline, number>,
  timeout: number,
  timer: Timer,
): Disposable {
  if (isBrowser && 'requestIdleCallback' in window) {
    const handle = window.requestIdleCallback((deadline) => fn(deadline, timer.currentTime()), {
      timeout,
    })

    return { dispose: () => window.cancelIdleCallback(handle) }
  }

  const deadline = {
    didTimeout: false,
    timeRemaining: () => Infinity,
  }

  const disposable = timer.delay((t) => fn(deadline, t), 0)
  const dispose = () => {
    disposable.dispose()
    deadline.timeRemaining = () => 0
  }

  return { dispose }
}
