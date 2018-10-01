import { curry } from '../lambda'

export const between: {
  (from: number, to: number, num: number): number
  (from: number, to: number): (num: number) => number
  (from: number): {
    (to: number, num: number): number
    (to: number): (num: number) => number
  }
} = curry((from: number, to: number, num: number): number => Math.min(to, Math.max(from, num)))
