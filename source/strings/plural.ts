import { curry } from '../lambda'

export const plural: {
  (str: string, numOfItems: number): string
  (str: string): (numOfItems: number) => string
} = curry(__plural)

function __plural(str: string, num: number): string {
  if (num === 1) {
    return str
  }

  return str + 's'
}
