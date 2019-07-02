import { curry } from '@typed/lambda'

/**
 * Get the substring of a string
 */
export const substring: {
  (from: number, to: number | undefined, str: string): string
  (from: number, to: number | undefined): (str: string) => string
} = curry(__substring)

function __substring(from: number, to: number | undefined, str: string): string {
  return str.substring(from, to)
}
