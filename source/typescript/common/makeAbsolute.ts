import { isAbsolute, join } from 'path'

export function makeAbsolute(basePath: string, absoluteOrRelative: string): string {
  return isAbsolute(absoluteOrRelative) ? absoluteOrRelative : join(basePath, absoluteOrRelative)
}
