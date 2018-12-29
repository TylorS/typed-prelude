import { MemoryResult } from '../types'

export function findDuplicatesByPath(results: MemoryResult[]) {
  const once: string[] = []
  const twice: string[] = []
  const twiceFiles: MemoryResult[] = []

  for (const result of results) {
    const { fileName } = result
    const seenOnce = once.includes(fileName)
    const seenTwice = twice.includes(fileName)

    if (seenTwice) {
      continue
    }

    if (seenOnce) {
      twice.push(fileName)
      twiceFiles.push(result)
    } else {
      once.push(fileName)
    }
  }

  return twiceFiles
}
