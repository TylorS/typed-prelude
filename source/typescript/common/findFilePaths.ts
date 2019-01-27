import { ascend } from '@typed/list'
import { sync } from 'glob'
import { makeAbsolute } from './makeAbsolute'

export function findFilePaths(directory: string, fileGlobs: string[]): string[] {
  fileGlobs = fileGlobs.slice().sort(ascend(x => x.startsWith('!')))

  const fileNames: string[] = []

  for (const fileGlob of fileGlobs) {
    const isExclude = fileGlob.startsWith('!')
    const matches = sync(fileGlob.replace(/^!/, ''), { cwd: directory })

    if (isExclude) {
      matches.forEach(match => {
        const index = fileNames.findIndex(x => x === match)

        if (index > -1) {
          fileNames.splice(index, 1)
        }
      })
    } else {
      fileNames.push(...matches)
    }
  }

  return fileNames.map(x => makeAbsolute(directory, x))
}
