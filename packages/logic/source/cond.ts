import { curry, Predicate } from '@typed/lambda'
import { Maybe, Nothing } from '@typed/maybe'

/**
 * Basic pattern matching
 * @param conditionals :: [((a -> boolean), (a -> b))]
 * @param value :: a
 * @returns :: Maybe b
 */
export const cond: {
  <A, B>(conditions: ReadonlyArray<Conditional<A, B>>, value: A): Maybe<B>
  <A, B>(conditions: ReadonlyArray<Conditional<A, B>>): (value: A) => Maybe<B>
} = curry(__cond) as {
  <A, B>(conditions: ReadonlyArray<Conditional<A, B>>, value: A): Maybe<B>
  <A, B>(conditions: ReadonlyArray<Conditional<A, B>>): (value: A) => Maybe<B>
}

function __cond<A, B>(conditionals: ReadonlyArray<Conditional<A, B>>, value: A): Maybe<B> {
  const itemCount = conditionals.length

  for (let i = 0; i < itemCount; ++i) {
    const [predicate, f] = conditionals[i]

    if (predicate(value)) {
      return Maybe.of(f(value))
    }
  }

  return Nothing
}

/**
 * @name Conditional
 * @type
 */
export type Conditional<A, B> = [Predicate<A>, (value: A) => B]
