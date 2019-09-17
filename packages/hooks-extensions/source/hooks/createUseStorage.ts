import { handle, map, Pure } from '@typed/env'
import { createUseChannel, createUseMemo, withCreateHook } from '@typed/hooks'
import { tap } from '@typed/lambda'
import { Maybe } from '@typed/maybe'
import { clear, getItem, removeItem, scopeStorage, setItem } from '@typed/storage'
import { StorageChannel } from '../channels'
import { createUseForceUpdate } from './createUseForceUpdate'

export const createUseStorage = withCreateHook(
  createHook =>
    [
      createHook(createUseChannel),
      createHook(createUseMemo),
      createHook(createUseForceUpdate),
    ] as const,
  ([useChannel, useMemo, useForceUpdate], scope?: string) => {
    const forceUpdate = useForceUpdate()
    const storage = useChannel(StorageChannel)
    const scopedStorage = scope ? scopeStorage(scope, storage) : storage

    return [
      storage,
      {
        getItem: useMemo(getStorageItem, [scopedStorage]),
        setItem: useMemo(setStorageItem, [scopedStorage, forceUpdate]),
        removeItem: useMemo(removeStorageItem, [scopedStorage, forceUpdate]),
        clear: useMemo(clearStorage, [scopedStorage]),
      },
    ] as const
  },
)

function getStorageItem(storage: Storage) {
  return (key: string): Pure<Maybe<string>> => {
    return handle({ storage }, getItem(key))
  }
}

function setStorageItem(storage: Storage, forceUpdate: () => void) {
  return (key: string, value: string): Pure<string> => {
    return handle({ storage }, map(tap(forceUpdate), setItem(key, value)))
  }
}

function removeStorageItem(storage: Storage, forceUpdate: () => void) {
  return (key: string): Pure<void> => {
    return handle({ storage }, map(tap(forceUpdate), removeItem(key)))
  }
}

function clearStorage(storage: Storage): Pure<void> {
  return handle({ storage }, clear)
}
