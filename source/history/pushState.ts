import { asap, currentTime } from '@most/scheduler'
import { Effect } from '../effect'
import { callbackTask } from '../effect/callbackTask'
import { curry } from '../lambda'
import { HistoryResources } from './types'

export const pushState: {
  (data: any, url: string): Effect<Location, HistoryResources>
  (data: any): (url: string) => Effect<Location, HistoryResources>
} = curry(
  (data: any, url: string): Effect<Location, HistoryResources> =>
    Effect.create((cb, { history, location, scheduler }) => {
      function pushState() {
        history.pushState(data, '', url)

        cb(location, currentTime(scheduler))
      }

      return asap(callbackTask(pushState, void 0), scheduler)
    }),
)

export const pushHref = pushState({}, '')
