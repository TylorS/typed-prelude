import { curry, Predicate } from '../../lambda'
import { Maybe, Nothing } from '../../maybe'

export const findLast = curry(__findLast) as {
  <A>(predicate: Predicate<A>, list: ArrayLike<A>): Maybe<A>
  <A>(predicate: Predicate<A>): (list: ArrayLike<A>) => Maybe<A>
}

function __findLast<A>(predicate: Predicate<A>, list: ArrayLike<A>): Maybe<A> {
  for (let i = list.length - 1; i >= 0; --i) {
    const value = list[i]
    if (predicate(value)) {
      return Maybe.of(value)
    }
  }

  return Nothing
}
