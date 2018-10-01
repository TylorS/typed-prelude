import { curry } from '../lambda'

export const add = curry((left: number, right: number): number => left + right)
