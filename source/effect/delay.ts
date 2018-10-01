import { delay as delayTask } from '@most/scheduler'
import { callbackTask } from './callbackTask'
import { Effect } from './Effect'

export function delay(ms: number): Effect<void> {
  return Effect.create((cb, { scheduler }) => delayTask(ms, callbackTask(cb, void 0), scheduler))
}
