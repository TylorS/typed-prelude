import { asap, currentTime } from '@most/scheduler'
import { Effect } from '@typed/effect'
import { callbackTask } from '@typed/effect/callbackTask'
import { curry } from '@typed/lambda'
import { HistoryResources } from './types'

export const pushState = curry(
  (data: any, url: string): Effect<Location, HistoryResources> =>
    Effect.create((cb, { history, location, scheduler }) => {
      function pushState() {
        history.pushState(data, '', url)

        cb(location, currentTime(scheduler))
      }

      return asap(callbackTask(pushState, void 0), scheduler)
    }),
)

export const pushPath = pushState(null)
