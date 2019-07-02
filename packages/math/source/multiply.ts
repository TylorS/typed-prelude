import { curry } from '@typed/lambda'

/** Multiply 2 numbers */
export const multiply: {
  (left: number, right: number): number
  (left: number): (right: number) => number
} = curry(__multiply) as {
  (left: number, right: number): number
  (left: number): (right: number) => number
}

function __multiply(left: number, right: number): number {
  return left * right
}
