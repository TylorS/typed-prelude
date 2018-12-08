import { curry } from '../lambda'

export const substring = curry(__substring)

function __substring(from: number, to: number | undefined, str: string): string {
  return str.substring(from, to)
}
