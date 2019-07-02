import { curry } from '@typed/lambda'

/**
 * Split a string
 */
export const split: {
  (separator: string | RegExp, str: string): string[]
  (separator: string | RegExp): (str: string) => string[]
} = curry(__split)

function __split(separator: string | RegExp, str: string): string[] {
  return str.split(separator)
}
