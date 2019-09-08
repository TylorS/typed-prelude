import { Channel, createUseProvider, withCreateHook } from '@typed/hooks'

export const withUseProvider = <A>(channel: Channel<A>) =>
  withCreateHook(
    createHook => createHook(createUseProvider),
    (useProvider, value: A) => useProvider(channel, value),
  )
