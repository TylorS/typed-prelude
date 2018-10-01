import { curry, flip } from '../lambda'

export const subtract: {
  (left: number, right: number): number
  (left: number): (right: number) => number
} = curry(__subtract)
export const subtractBy: {
  (right: number, left: number): number
  (right: number): (left: number) => number
} = curry(flip(__subtract))

function __subtract(left: number, right: number): number {
  return left - right
}
