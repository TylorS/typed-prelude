import { curry, Predicate } from '../../lambda'
import { Maybe, Nothing } from '../../maybe'

export const findIndex: {
  <A>(predicate: Predicate<A>, list: A[]): Maybe<number>
  <A>(predicate: Predicate<A>): (list: A[]) => Maybe<number>
} = curry(
  <A>(predicate: Predicate<A>, list: A[]): Maybe<number> => {
    for (let i = 0; i < list.length; ++i) {
      if (predicate(list[i])) {
        return Maybe.of(i)
      }
    }

    return Nothing
  },
)
