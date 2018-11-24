import { curry, Predicate2 } from '../lambda'
import { fromJust, isJust, isNothing, Maybe } from '../maybe'

export const filterMaybes = <A>(list: Array<Maybe<A>>): A[] => list.filter(isJust).map(fromJust)

export const maybeFilter: {
  <A, B>(predicate: Predicate2<A, B>, maybe: Maybe<A>, list: B[]): B[]
  <A, B>(predicate: Predicate2<A, B>, maybe: Maybe<A>): (list: B[]) => B[]
  <A, B>(predicate: Predicate2<A, B>): {
    (maybe: Maybe<A>, list: B[]): B[]
    (maybe: Maybe<A>): (list: B[]) => B[]
  }
} = curry(
  <A, B>(predicate: Predicate2<A, B>, maybe: Maybe<A>, list: B[]): B[] => {
    if (isNothing(maybe)) {
      return list
    }

    const a = fromJust(maybe)

    return list.filter(b => predicate(a, b))
  },
)
