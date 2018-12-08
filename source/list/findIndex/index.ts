import { curry, Predicate } from '../../lambda'
import { Maybe, Nothing } from '../../maybe'

export const findIndex = curry(
  <A>(predicate: Predicate<A>, list: ArrayLike<A>): Maybe<number> => {
    for (let i = 0; i < list.length; ++i) {
      if (predicate(list[i])) {
        return Maybe.of(i)
      }
    }

    return Nothing
  },
) as {
  <A>(predicate: Predicate<A>, list: ArrayLike<A>): Maybe<number>
  <A>(predicate: Predicate<A>): (list: ArrayLike<A>) => Maybe<number>
}
