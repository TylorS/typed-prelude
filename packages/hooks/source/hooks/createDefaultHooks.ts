import { Fn, memoize } from '@typed/lambda'
import { HooksManager } from '../manager'
import { InitialValue } from '../types'
import { createUseChannel } from './createUseChannel'
import { createUseEffect } from './createUseEffect'
import { createUseMemo } from './createUseMemo'
import { createUseProvider } from './createUseProvider'
import { createUseRef } from './createUseRef'
import { createUseState } from './createUseState'

export function createDefaultHooks(createHook: HooksManager['createHook']) {
  const useChannel = createHook(createUseChannel)
  const useEffect = createHook(createUseEffect)
  const useMemo = createHook(createUseMemo)
  const useProvider = createHook(createUseProvider)
  const useRef = createHook(createUseRef)
  const useState = createHook(createUseState)

  const useCallback = <A extends readonly any[], B>(fn: Fn<A, B>, deps: ReadonlyArray<any> = []) =>
    useMemo<readonly any[], Fn<A, B>>(
      () => memoize(fn as Fn<any, any>) /*TODO: why is this required?*/,
      deps,
    )

  const useReducer = <A, B>(
    reducer: Fn<[B, A], B>,
    seed: InitialValue<B>,
  ): readonly [B, Fn<[A], B>] => {
    const [state, setState] = useState(seed)
    const dispatch = useCallback((value: A) => setState(reducer(state, value)), [state])

    return [state, dispatch]
  }

  return {
    useChannel,
    useEffect,
    useMemo,
    useCallback,
    useProvider,
    useRef,
    useState,
    useReducer,
  } as const
}
