import { isAbsolute, join } from 'path'

export function makeAbsolute(basePath: string, absoluteOrRelative: string): string {
  const absolutePath = isAbsolute(absoluteOrRelative)
    ? absoluteOrRelative
    : join(basePath, absoluteOrRelative)

  return absolutePath
}
