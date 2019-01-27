import { mapToList } from '../../objects/mapToList'
import { FileVersionManager } from '../types'

const EMPTY_VERSION: VersionModification = { version: -1 }

export function createFileVersionManager(
  fileVersions: Record<string, { version: number }>,
): FileVersionManager {
  let queue: Record<string, VersionModification> = Object.create(null)

  function addFileVersion(filePath: string) {
    if (!queue[filePath]) {
      queue[filePath] = { version: 0 }
    }

    queue[filePath].version++
  }

  function removeFileVersion(filePath: string) {
    queue[filePath] = EMPTY_VERSION
  }

  function applyChanges(): Array<[string, number]> {
    const currentQueue = queue
    queue = Object.create(null)

    return mapToList((key: string, value: VersionModification): [string, number] => {
      if (value.version === -1) {
        delete fileVersions[key]
      } else {
        fileVersions[key] = value
      }

      return [key, value.version]
    }, currentQueue)
  }

  function hasFileVersion(filePath: string) {
    return !!fileVersions[filePath]
  }

  function fileVersionOf(filePath: string) {
    const { version } = fileVersions[filePath] || EMPTY_VERSION

    return version
  }

  return {
    hasFileVersion,
    addFileVersion,
    updateFileVersion: addFileVersion,
    removeFileVersion,
    applyChanges,
    fileVersionOf,
  }
}

type VersionModification = { version: number }
