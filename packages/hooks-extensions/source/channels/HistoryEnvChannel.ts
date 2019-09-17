import {
  createHistoryEnv,
  HistoryEnv,
  Path,
  scopeHistoryEnv,
  wrapInSubscription,
} from '@typed/history'
import {
  Channel,
  createChannel,
  CreateHookContext,
  createUseMemo,
  createUseProvider,
  withCreateHook,
} from '@typed/hooks'

import { NewType } from '@typed/new-type'
import { createUseSubscription } from '../hooks/createUseSubscription'
import { withUseChannel } from '../hooks/withUseChannel'

export const HistoryEnvChannel = createChannel<HistoryEnv<unknown>>(createHistoryEnv<unknown>())

export const createUseHistoryEnv = <A>(
  context: CreateHookContext,
  scope?: NewType<string, 'Path'>, // TS complains about portability of NewType
) =>
  withUseChannel(
    (env, scope?: Path) => (scope ? scopeHistoryEnv(scope, env) : env),
    HistoryEnvChannel as Channel<HistoryEnv<A>>,
  )(context, scope)

export type ProvideHistoryEnvOptions<A> = {
  readonly historyEnv?: HistoryEnv<A>
  readonly scope?: Path
}

export const createProvideHistoryEnv = <A>(
  context: CreateHookContext,
  options: ProvideHistoryEnvOptions<A>,
) =>
  withCreateHook(
    createHook =>
      [
        createHook(createUseProvider),
        createHook(createUseMemo),
        createHook(createUseSubscription),
      ] as const,
    (
      [useProvider, useMemo, useSubscription],
      { historyEnv: initialValue, scope }: ProvideHistoryEnvOptions<A> = {},
    ) => {
      const [historyEnv, setHistoryEnv] = useProvider(
        HistoryEnvChannel,
        initialValue && scope ? scopeHistoryEnv(scope, initialValue) : void 0,
      )
      const { subscription } = useMemo(wrapInSubscription, [historyEnv])
      const [, disposable] = useSubscription(subscription, env =>
        setHistoryEnv(scope ? scopeHistoryEnv(scope, env) : env),
      )

      return [historyEnv, setHistoryEnv, disposable] as const
    },
  )(context, options)
