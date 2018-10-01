import { add } from './add'

export const sum = (numbers: number[]): number => numbers.reduce(add, 0)
