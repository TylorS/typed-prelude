import { divide } from './divide'
import { sum } from './sum'

export const mean = (numbers: number[]): number => divide(numbers.length, sum(numbers))
