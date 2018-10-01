import { curry, Predicate } from '../../lambda'
import { Maybe, Nothing } from '../../maybe'

export const findLastIndex: {
  <A>(predicate: Predicate<A>, list: A[]): Maybe<number>
  <A>(predicate: Predicate<A>): (list: A[]) => Maybe<number>
} = curry(__findLastIndex)

function __findLastIndex<A>(predicate: Predicate<A>, list: A[]): Maybe<number> {
  for (let i = list.length - 1; i >= 0; --i) {
    if (predicate(list[i])) {
      return Maybe.of(i)
    }
  }

  return Nothing
}
