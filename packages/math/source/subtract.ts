import { curry } from '@typed/lambda'

/** Subtract two number */
export const subtract = curry(__subtract)

/** Composition-ready subtraction */
export const subtractBy = curry(__subtractBy)

function __subtract(left: number, right: number): number {
  return left - right
}

function __subtractBy(right: number, left: number): number {
  return left - right
}
