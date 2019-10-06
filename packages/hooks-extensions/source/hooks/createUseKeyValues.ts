import { CreateHookContext, withCreateHook } from '@typed/hooks'
import { pipe } from '@typed/lambda'
import { append, remove, update } from '@typed/list'
import { equals } from '@typed/logic'
import { first, Tuple } from '@typed/tuple'
import { createUsePureState } from './createUsePureState'

export function createUseKeyValues<A, B>(
  context: CreateHookContext,
  initial: () => ReadonlyArray<Tuple<A, B>> = () => [],
) {
  const createUseKeyValuesHook = withCreateHook(
    createHook => [createHook(createUsePureState)] as const,
    ([useState], initial: () => ReadonlyArray<Tuple<A, B>>) => {
      const [keyValues, setKeyValues] = useState(initial)

      const updateKey = (previousKey: A, newKey: A) =>
        setKeyValues(updateByPreviousKey(previousKey, newKey))
      const updateKeyByIndex = (key: A, index: number) => setKeyValues(updateByKeyIndex(key, index))
      const updateValue = (key: A, value: B) => setKeyValues(updateValueByKey(key, value))
      const updateValueByIndex = (value: B, index: number) =>
        setKeyValues(updateByValueIndex(value, index))
      const removeKey = (key: A) => setKeyValues(removeByKey(key))
      const addKeyValue = (key: A, value: B) => setKeyValues(append([key, value] as const))

      const updateFns = {
        updateKey,
        updateKeyByIndex,
        updateValue,
        updateValueByIndex,
        removeKey,
        addKeyValue,
      } as const

      return [keyValues, updateFns] as const
    },
  )

  return createUseKeyValuesHook(context, initial)
}

function updateByPreviousKey<A, B>(previousKey: A, newKey: A) {
  return (keyValues: ReadonlyArray<Tuple<A, B>>) => {
    const index = findKeyValueIndex(previousKey, keyValues)

    return updateByKeyIndex<A, B>(newKey, index)(keyValues)
  }
}

function updateByKeyIndex<A, B>(key: A, index: number) {
  return (keyValues: ReadonlyArray<Tuple<A, B>>): ReadonlyArray<Tuple<A, B>> => {
    if (index > -1) {
      const [, value] = keyValues[index]

      return update(index, [key, value], keyValues)
    }

    return keyValues
  }
}

function updateValueByKey<A, B>(key: A, value: B) {
  return (keyValues: ReadonlyArray<Tuple<A, B>>): ReadonlyArray<Tuple<A, B>> => {
    const index = findKeyValueIndex(key, keyValues)

    return updateByValueIndex<A, B>(value, index)(keyValues)
  }
}

function updateByValueIndex<A, B>(value: B, index: number) {
  return (keyValues: ReadonlyArray<Tuple<A, B>>): ReadonlyArray<Tuple<A, B>> => {
    if (index > -1) {
      const [key] = keyValues[index]

      return update(index, [key, value], keyValues)
    }

    return keyValues
  }
}

function removeByKey<A, B>(key: A) {
  return (keyValues: ReadonlyArray<Tuple<A, B>>): ReadonlyArray<Tuple<A, B>> => {
    const index = findKeyValueIndex(key, keyValues)

    return index === -1 ? keyValues : remove(index, 1, keyValues)
  }
}

function findKeyValueIndex<A, B>(key: A, keyValues: ReadonlyArray<Tuple<A, B>>) {
  return keyValues.findIndex(
    pipe(
      first,
      equals(key),
    ),
  )
}
