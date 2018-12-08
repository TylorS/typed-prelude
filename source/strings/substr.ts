import { curry } from '../lambda'

export const substr = curry(__substr)

function __substr(from: number, length: number | undefined, str: string): string {
  return str.substr(from, length)
}
