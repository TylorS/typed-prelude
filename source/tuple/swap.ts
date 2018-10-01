import { First, first, Second, second, Tuple } from './tuple'

export const swap = <T extends Tuple>(tuple: T): Tuple<Second<T>, First<T>> => [
  second(tuple),
  first(tuple),
]
