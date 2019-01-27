import { Arity1 } from '@typed/lambda'
import { map as maybeMap, Maybe } from '@typed/maybe'

export interface Match<A, B> extends Arity1<A, Maybe<B>> {}

export namespace Match {
  export const map = <A, B, C>(fn: (value: B) => C, match: Match<A, B>): Match<A, C> => (
    value: A,
  ) => maybeMap(fn, match(value))
}
