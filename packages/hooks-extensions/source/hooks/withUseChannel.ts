import { Channel, createUseChannel, createUseMemo, withCreateHook } from '@typed/hooks'

export const withUseChannel = <A, B extends readonly any[], C>(
  fn: (channel: A, ...args: B) => C,
  channel: Channel<A>,
) =>
  withCreateHook(
    createHook => [createHook(createUseChannel), createHook(createUseMemo)] as const,
    ([useChannel, useMemo], ...args: B) =>
      useMemo((a: A, b: B) => fn(a, ...b), [useChannel(channel), args]),
  )
