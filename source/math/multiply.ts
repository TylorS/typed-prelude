import { curry } from '@typed/lambda'

/** Multiply 2 numbers */
export const multiply = curry(__multiply) as {
  (left: number, right: number): number
  (left: number): (right: number) => number
}

function __multiply(left: number, right: number): number {
  return left * right
}
