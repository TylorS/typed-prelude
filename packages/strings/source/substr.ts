import { curry } from '@typed/lambda'

/**
 * Get the substring of a string
 */
export const substr: {
  (from: number, length: number | undefined, str: string): string
  (from: number, length: number | undefined): (str: string) => string
} = curry(__substr)

function __substr(from: number, length: number | undefined, str: string): string {
  return str.substr(from, length)
}
