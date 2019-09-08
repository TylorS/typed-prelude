import { Channel, createUseChannel, withCreateHook } from '@typed/hooks'

export const withUseChannel = <A, B extends readonly any[], C>(
  fn: (channel: A, ...args: B) => C,
  channel: Channel<A>,
) =>
  withCreateHook(
    createHook => createHook(createUseChannel),
    (useChannel, ...args: B) => fn(useChannel(channel), ...args),
  )
