import { Channel } from './Channel'

export function createChannel<A>(defaultValue: A): Channel<A> {
  return { defaultValue }
}
