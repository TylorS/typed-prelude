import { curry, flip } from '../lambda'

export const subtract = curry(__subtract)
export const subtractBy = curry(flip(__subtract))

function __subtract(left: number, right: number): number {
  return left - right
}
