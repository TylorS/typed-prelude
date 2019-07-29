import { Channel } from './types'

export const createChannel = <A>(defaultValue: A): Channel<A> => {
  return {
    defaultValue,
  }
}
