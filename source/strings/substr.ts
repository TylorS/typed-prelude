import { curry } from '../lambda'

export const substr: {
  (from: number, length: number | undefined, str: string): string
  (from: number, length: number | undefined): (str: string) => string
  (from: number): {
    (length: number | undefined, str: string): string
    (length: number | undefined): (str: string) => string
  }
} = curry(__substr)

function __substr(from: number, length: number | undefined, str: string): string {
  return str.substr(from, length)
}
