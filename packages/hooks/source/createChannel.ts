import { Channel } from './Channel'

export const createChannel = <A>(defaultValue: A): Channel<A> => {
  return {
    defaultValue,
  }
}
