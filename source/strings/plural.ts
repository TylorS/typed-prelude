import { curry } from '../lambda'

export const plural = curry(__plural) as {
  (str: string, numOfItems: number): string
  (str: string): (numOfItems: number) => string
}

function __plural(str: string, num: number): string {
  if (num === 1) {
    return str
  }

  return str + 's'
}
