import { curry } from '../lambda'

export const divide: {
  (left: number, right: number): number
  (left: number): (right: number) => number
} = curry((left: number, right: number) => left / right)
export const divideBy: {
  (right: number, left: number): number
  (right: number): (left: number) => number
} = curry((right: number, left: number): number => left / right)
