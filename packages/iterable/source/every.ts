import { curry, Predicate } from '@typed/lambda'

export const every: {
  <A>(predicate: Predicate<A>, iterable: Iterable<A>): boolean
  <A>(predicate: Predicate<A>): (iterable: Iterable<A>) => boolean
} = curry(<A>(predicate: Predicate<A>, iterable: Iterable<A>): boolean =>
  Array.from(iterable).every(predicate),
)
