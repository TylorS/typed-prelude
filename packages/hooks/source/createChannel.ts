import { Effects } from '@typed/effects'
import { Channel } from './Channel'

export function createChannel<E, A>(defaultValue: () => Effects<E, A>): Channel<E, A> {
  return { defaultValue }
}
