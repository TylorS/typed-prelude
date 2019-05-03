import { curry } from '@typed/lambda'

/** Modulus division */
export const modulo = curry(__modulo)

function __modulo(left: number, right: number): number {
  return left % right
}
