import { equals } from '@typed/common'
import { pipeline } from '@typed/lambda'
import { filter, map } from '@typed/list'
import { isNull, isUndefined, or } from '@typed/logic'
import { keysOf } from '@typed/objects'
import { RecordDiff } from '../model'

const isNullOrUndefined = or(isNull, isUndefined)

export function diffRecordMap<K extends string, A>(
  currentMap: Record<K, A>,
  updatedMap: Record<K, A>,
): RecordDiff<K, A> {
  const currentKeys = keysOf(currentMap)
  const updatedKeys = keysOf(updatedMap)
  const removed = pipeline(
    currentKeys,
    filter((key: K) => !updatedKeys.includes(key) || isNullOrUndefined(updatedMap[key])),
    map((key) => [key, currentMap[key]] as const),
  )
  const updated = pipeline(
    updatedKeys,
    filter((key: K) => !currentKeys.includes(key) || !equals(currentMap[key], updatedMap[key])),
    map((key) => [key, currentMap[key]] as const),
  )

  return {
    removed,
    updated,
  }
}
