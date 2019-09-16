import { handle, map } from '@typed/env'
import { createUseChannel, createUseMemo, withCreateHook } from '@typed/hooks'
import { noOp, tap } from '@typed/lambda'
import { clear, getItem, removeItem, scopeStorage, setItem } from '@typed/storage'
import { StorageChannel } from '../channels'

const createUseForceUpdate = withCreateHook(
  createHook =>
    createHook(context => ({ update: () => () => context.hasBeenUpdated(), dispose: noOp })),
  useForceUpdate => useForceUpdate(),
)

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
  return (key: string) => {
    return handle({ storage }, getItem(key))
  }
}

function setStorageItem(storage: Storage, forceUpdate: () => void) {
  return (key: string, value: string) => {
    return handle({ storage }, map(tap(forceUpdate), setItem(key, value)))
  }
}

function removeStorageItem(storage: Storage, forceUpdate: () => void) {
  return (key: string) => {
    return handle({ storage }, map(tap(forceUpdate), removeItem(key)))
  }
}

function clearStorage(storage: Storage) {
  return handle({ storage }, clear)
}
