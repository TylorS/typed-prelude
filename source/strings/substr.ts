import { curry } from '@typed/lambda'

/**
 * Get the substring of a string
 */
export const substr = curry(__substr)

function __substr(from: number, length: number | undefined, str: string): string {
  return str.substr(from, length)
}
