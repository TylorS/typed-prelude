import { curry, flip } from '@typed/lambda'

/** Subtract two number */
export const subtract = curry(__subtract)

/** Composition-ready subtraction */
export const subtractBy = curry(flip(__subtract))

function __subtract(left: number, right: number): number {
  return left - right
}
