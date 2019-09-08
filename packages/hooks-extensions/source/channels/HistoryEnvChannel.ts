import { createHistoryEnv, HistoryEnv, wrapInSubscription } from '@typed/history'
import {
  Channel,
  createChannel,
  CreateHookContext,
  createUseMemo,
  createUseProvider,
  withCreateHook,
} from '@typed/hooks'
import { id } from '@typed/lambda'
import { createUseSubscription } from '../hooks/createUseSubscription'
import { withUseChannel } from '../hooks/withUseChannel'

export const HistoryEnvChannel = createChannel<HistoryEnv<unknown>>(createHistoryEnv<unknown>())

export const createUseHistoryEnv = <A>(context: CreateHookContext) =>
  withUseChannel(id, HistoryEnvChannel as Channel<HistoryEnv<A>>)(context)

export const createProvideHistoryEnv = <A>(
  context: CreateHookContext,
  historyEnv?: HistoryEnv<A>,
) =>
  withCreateHook(
    createHook =>
      [
        createHook(createUseProvider),
        createHook(createUseMemo),
        createHook(createUseSubscription),
      ] as const,
    ([useProvider, useMemo, useSubscription], initialValue?: HistoryEnv<A>) => {
      const [historyEnv, setHistoryEnv] = useProvider(HistoryEnvChannel, initialValue)
      const { subscription } = useMemo(wrapInSubscription, [historyEnv])
      const [, disposable] = useSubscription(subscription, setHistoryEnv)

      return [historyEnv, setHistoryEnv, disposable] as const
    },
  )(context, historyEnv)
