import { curry } from '@typed/lambda'

/**
 * Get the substring of a string
 */
export const substring = curry(__substring)

function __substring(from: number, to: number | undefined, str: string): string {
  return str.substring(from, to)
}
