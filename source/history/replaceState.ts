import { asap, currentTime } from '@most/scheduler'
import { Effect } from '@typed/effect'
import { callbackTask } from '@typed/effect/callbackTask'
import { curry } from '@typed/lambda'
import { HistoryResources } from './types'

export const replaceState = curry(
  (data: any, url: string): Effect<Location, HistoryResources> =>
    Effect.create((cb, { history, location, scheduler }) => {
      function replaceState() {
        history.replaceState(data, '', url)

        cb(location, currentTime(scheduler))
      }

      return asap(callbackTask(replaceState, void 0), scheduler)
    }),
)

export const replacePath = replaceState(null)
