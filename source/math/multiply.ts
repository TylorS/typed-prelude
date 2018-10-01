import { curry } from '../lambda'

export const multiply: {
  (left: number, right: number): number
  (left: number): (right: number) => number
} = curry(__multiply)

function __multiply(left: number, right: number): number {
  return left * right
}
