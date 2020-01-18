import { TimerChannel } from './TimerChannel'
import { useChannel } from './useChannel'

export function* useTimer() {
  return yield* useChannel(TimerChannel)
}
