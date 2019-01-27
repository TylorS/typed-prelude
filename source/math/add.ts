import { curry } from '@typed/lambda'

export const add = curry((left: number, right: number): number => left + right) as {
  (left: number, right: number): number
  (left: number): (right: number) => number
}
