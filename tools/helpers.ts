import { capitalize } from '../packages/strings/source'

export function makePackageName(pkg: string): string {
  return capitalize(pkg.replace('-', ' ')).replace(' ', '')
}
