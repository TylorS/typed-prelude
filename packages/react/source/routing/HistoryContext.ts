import { Env, handle, Pure } from '@typed/env'
import { HistoryEnv, wrapInSubscription } from '@typed/history'
import { withDefault } from '@typed/maybe'
import { MergeObjects, valuesOf } from '@typed/objects'
import { createContext, createElement, PropsWithChildren, useCallback, useContext } from 'react'
import { useSubscription } from '../hooks'

const HistoryContext = createContext<HistoryContextProps<unknown>>(void 0 as any)

export type HistoryContextProps<A> = MergeObjects<
  HistoryEnv<A>,
  { readonly updateLocation: <B>(env: Env<HistoryEnv<A>, B>) => Pure<B> }
>

export function HistoryProvider<A>({
  children,
  ...historyEnv
}: PropsWithChildren<HistoryContextProps<A>>) {
  const wrapHistoryEnv = useCallback(() => wrapInSubscription(historyEnv), valuesOf(historyEnv))
  const { subscription, ...wrappedHistoryEnv } = wrapHistoryEnv()
  const [updatedEnv] = useSubscription(subscription, wrapHistoryEnv)
  const updateLocation = <B>(env: Env<HistoryEnv<A>, B>): Pure<B> => handle(wrappedHistoryEnv, env)

  return createElement(
    HistoryContext.Provider,
    {
      value: { ...withDefault(wrappedHistoryEnv, updatedEnv), updateLocation },
    },
    children,
  )
}

export const HistoryConsumer = HistoryContext.Consumer

export const useHistory = <A = null>(): HistoryContextProps<A> => useContext(HistoryContext)
