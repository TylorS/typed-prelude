import { equals } from '@typed/common'
import { pipeline } from '@typed/lambda'
import { filter, map } from '@typed/list'
import { isEmpty, keysOf } from '@typed/objects'
import { RecordDiff } from '../model'

const EMPTY: any[] = []
const empty = {
  removed: EMPTY,
  updated: EMPTY,
}

export function diffRecordMap<K extends string, A>(
  currentMap: Record<K, A>,
  updatedMap: Record<K, A>,
): RecordDiff<K, A> {
  if (isEmpty(currentMap) && isEmpty(updatedMap)) {
    return empty
  }

  const currentKeys = keysOf(currentMap)
  const updatedKeys = keysOf(updatedMap)

  const removed = pipeline(
    currentKeys,
    filter((key: K) => !updatedKeys.includes(key)),
    map((key) => [key, currentMap[key]] as const),
  )
  const updated = pipeline(
    updatedKeys,
    filter((key: K) => !currentKeys.includes(key) || !equals(currentMap[key], updatedMap[key])),
    map((key) => [key, updatedMap[key]] as const),
  )

  return {
    removed,
    updated,
  }
}
