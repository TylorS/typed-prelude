import { createDefaultHooks } from './hooks'
import { createManager } from './manager'

export const {
  state,
  contextManager,
  channelManager,
  findOrCreateHookContext,
  defaultTimer,
  createHook,
  withHooks,
} = createManager()

export const {
  useChannel,
  useEffect,
  useMemo,
  useCallback,
  useProvider,
  useRef,
  useState,
  useReducer,
} = createDefaultHooks(createHook)
