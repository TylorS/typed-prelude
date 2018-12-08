import { curry, Predicate } from '../../lambda'
import { Maybe, Nothing } from '../../maybe'

export const findLastIndex = curry(__findLastIndex) as {
  <A>(predicate: Predicate<A>, list: ArrayLike<A>): Maybe<number>
  <A>(predicate: Predicate<A>): (list: ArrayLike<A>) => Maybe<number>
}

function __findLastIndex<A>(predicate: Predicate<A>, list: ArrayLike<A>): Maybe<number> {
  for (let i = list.length - 1; i >= 0; --i) {
    if (predicate(list[i])) {
      return Maybe.of(i)
    }
  }

  return Nothing
}
