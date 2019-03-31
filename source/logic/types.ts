import { Arity1, Is, Predicate } from '@typed/lambda'
import { map as maybeMap, Maybe, Nothing } from '@typed/maybe'

export interface Match<A, B> extends Arity1<A, Maybe<B>> {}

export namespace Match {
  export const map = <A, B, C>(fn: (value: B) => C, match: Match<A, B>): Match<A, C> => (
    value: A,
  ) => maybeMap(fn, match(value))

  export function fromPredicate<A>(predicate: Predicate<A>): Match<A, A>
  export function fromPredicate<A, B>(predicate: Is<B>): Match<A, B>
  export function fromPredicate<A>(predicate: Predicate<A>): Match<A, A> {
    return (value: A) => (predicate(value) ? Maybe.of(value) : Nothing)
  }
}
