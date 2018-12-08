import { curry } from '../lambda'

export const divide = curry((left: number, right: number) => left / right)
export const divideBy = curry((right: number, left: number): number => left / right)
