import { First, first, Second, second, Tuple } from './tuple'

/**
 * Swap the values contained in a tuple
 * @param tuple :: Tuple a b
 * @returns :: Tuple b a
 */
export const swap = <T extends Tuple>(tuple: T): Tuple<Second<T>, First<T>> => [
  second(tuple),
  first(tuple),
]
