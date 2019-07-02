import { curry } from '@typed/lambda'

/**
 * Ensure a number is between two others
 * @param from :: number
 * @param to :: number
 * @param num :: number
 * @returns :: number
 */
export const between: {
  (from: number, to: number, num: number): number
  (from: number, to: number): (num: number) => number
  (from: number): {
    (to: number, num: number): number
    (to: number): (num: number) => number
  }
} = curry((from: number, to: number, num: number): number => Math.min(to, Math.max(from, num))) as {
  (from: number, to: number, num: number): number
  (from: number, to: number): (num: number) => number
  (from: number): {
    (to: number, num: number): number
    (to: number): (num: number) => number
  }
}
