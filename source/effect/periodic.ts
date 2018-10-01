import { periodic as periodicTask } from '@most/scheduler'
import { callbackTask } from './callbackTask'
import { Effect } from './Effect'

export function periodic(ms: number): Effect<void> {
  return Effect.create((cb, { scheduler }) => periodicTask(ms, callbackTask(cb, void 0), scheduler))
}
