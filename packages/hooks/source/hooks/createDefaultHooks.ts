import { HooksManager } from '../manager'
import { createUseCallback } from './createUseCallback'
import { createUseChannel } from './createUseChannel'
import { createUseEffect } from './createUseEffect'
import { createUseMemo } from './createUseMemo'
import { createUseProvider } from './createUseProvider'
import { createUseReducer } from './createUseReducer'
import { createUseRef } from './createUseRef'
import { createUseState } from './createUseState'

export function createDefaultHooks(createHook: HooksManager['createHook']) {
  const useChannel = createHook(createUseChannel)
  const useEffect = createHook(createUseEffect)
  const useMemo = createHook(createUseMemo)
  const useProvider = createHook(createUseProvider)
  const useRef = createHook(createUseRef)
  const useState = createHook(createUseState)
  const useCallback = createHook(createUseCallback)
  const useReducer = createHook(createUseReducer)

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
