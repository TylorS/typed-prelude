import { curry } from 'source/lambda'

export const substring: {
  (from: number, to: number | undefined, str: string): string
  (from: number, to: number | undefined): (str: string) => string
  (from: number): {
    (to: number | undefined, str: string): string
    (to: number | undefined): (str: string) => string
  }
} = curry(__substring)

function __substring(from: number, to: number | undefined, str: string): string {
  return str.substring(from, to)
}
