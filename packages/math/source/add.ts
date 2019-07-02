import { curry } from '@typed/lambda'

/**
 * Add together two values
 */
export const add: {
  (left: number, right: number): number
  (left: number): (right: number) => number
} = curry((left: number, right: number): number => left + right) as {
  (left: number, right: number): number
  (left: number): (right: number) => number
}
