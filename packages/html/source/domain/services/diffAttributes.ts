import { StrMap, StrMapDiff } from '../model'
import { isBooleanAttribute } from './isBooleanAttribute'

export function diffAttributes(
  currentMap: StrMap<string | undefined>,
  updatedMap: StrMap<string | undefined>,
): StrMapDiff<string | undefined> {
  const updated: (readonly [string, string | undefined])[] = []
  const removed: (readonly [string, string | undefined])[] = []

  const currentKeys = Object.keys(currentMap)
  const updatedKeys = Object.keys(updatedMap)

  for (const key of updatedKeys) {
    const currentValue = currentMap[key]
    const updatedValue = updatedMap[key]

    if (currentValue !== updatedValue) {
      if (!updatedValue && isBooleanAttribute(key)) {
        removed.push([key, currentValue])
      } else {
        updated.push([key, updatedValue])
      }
    }
  }

  for (const key of currentKeys) {
    if (!(key in updatedMap)) {
      removed.push([key, currentMap[key]])
    }
  }

  return {
    removed,
    updated,
  }
}
