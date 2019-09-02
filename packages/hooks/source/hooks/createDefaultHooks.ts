import { Fn } from '@typed/lambda'
import { HooksManager } from '../manager'
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
    useMemo<readonly any[], Fn<A, B>>(() => fn, deps)

  const useReducer = <A, B>(reducer: Fn<[B, A], B>, seed: B): readonly [B, Fn<[A], B>] => {
    const [state, setState] = useState(seed)
    const dispatch = useCallback((value: A) => setState(reducer(state, value)))

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
