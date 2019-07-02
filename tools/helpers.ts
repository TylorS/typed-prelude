import { isAbsolute, join } from 'path'
import { capitalize } from '../packages/strings/source'

export function makePackageName(pkg: string): string {
  return capitalize(
    pkg
      .replace('-', ' ')
      .replace('/', '')
      .replace(/^@/, ''),
  ).replace(' ', '')
}

export function makeAbsolute(directory: string, path: string): string {
  return isAbsolute(path) ? path : join(directory, path)
}
