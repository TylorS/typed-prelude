import { curry } from '@typed/lambda'

/**
 * Append 's' to a value if numOfItems != 1
 * @param str :: string
 * @param numOfItems :: number
 * @returns :: string
 */
export const plural: {
  (str: string, numOfItems: number): string
  (str: string): (numOfItems: number) => string
} = curry(__plural) as {
  (str: string, numOfItems: number): string
  (str: string): (numOfItems: number) => string
}

function __plural(str: string, num: number): string {
  if (num === 1) {
    return str
  }

  return str + 's'
}
