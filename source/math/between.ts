import { curry } from '../lambda'

export const between = curry(
  (from: number, to: number, num: number): number => Math.min(to, Math.max(from, num)),
) as {
  (from: number, to: number, num: number): number
  (from: number, to: number): (num: number) => number
  (from: number): {
    (to: number, num: number): number
    (to: number): (num: number) => number
  }
}
