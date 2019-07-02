import { curry } from '@typed/lambda'

/** Subtract two number */
export const subtract: {
  (left: number, right: number): number
  (left: number): (right: number) => number
} = curry(__subtract)

/** Composition-ready subtraction */
export const subtractBy: {
  (right: number, left: number): number
  (right: number): (left: number) => number
} = curry(__subtractBy)

function __subtract(left: number, right: number): number {
  return left - right
}

function __subtractBy(right: number, left: number): number {
  return left - right
}
