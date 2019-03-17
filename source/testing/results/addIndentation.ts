import { EOL } from 'os'

export function addIndentation(str: string, depth: number): string {
  return str.replace(/(\r\n|\r|\n)/g, EOL.padEnd(depth, ' '))
}
