import { Pure } from '@typed/env'
import { Maybe, Nothing } from '@typed/maybe'
import { usePureState } from './usePureState'

export function useStorage(key: string, storage: Storage): UseStorage {
  const [value, setValue] = usePureState(() => Maybe.of(storage.getItem(key)))
  const setItem = (value: string) =>
    Pure.fromIO(() => {
      storage.setItem(key, value)
      setValue(() => Maybe.of(value))

      return value
    })
  const removeItem = Pure.fromIO(() => {
    const currentValue = value

    storage.removeItem(key)
    setValue(() => Nothing)

    return currentValue
  })

  return [value, setItem, removeItem]
}

export type UseStorage = readonly [
  Maybe<string>,
  (value: string) => Pure<string>,
  Pure<Maybe<string>>
]
