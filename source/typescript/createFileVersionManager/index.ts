import { FileVersionManager } from '../types'

const EMPTY_VERSION = { version: -1 }

export function createFileVersionManager(
  fileVersions: Record<string, { version: number }>,
): FileVersionManager {
  function addFileVersion(filePath: string) {
    fileVersions[filePath] = { version: 0 }
  }

  function hasFileVersion(filePath: string) {
    return !!fileVersions[filePath]
  }

  function updateFileVersion(filePath: string) {
    fileVersions[filePath].version++
  }

  function removeFileVersion(filePath: string) {
    delete fileVersions[filePath]
  }

  function fileVersionOf(filePath: string) {
    const { version } = fileVersions[filePath] || EMPTY_VERSION

    return version
  }

  return {
    hasFileVersion,
    addFileVersion,
    updateFileVersion,
    removeFileVersion,
    fileVersionOf,
  }
}
