import { curry, Predicate2 } from '@typed/lambda'
import { fromJust, isJust, isNothing, Maybe } from '@typed/maybe'

export const filterMaybes = <A>(list: Array<Maybe<A>>): A[] => list.filter(isJust).map(fromJust)

export const maybeFilter = curry(
  <A, B>(predicate: Predicate2<A, B>, maybe: Maybe<A>, list: B[]): B[] => {
    if (isNothing(maybe)) {
      return list
    }

    const a = fromJust(maybe)

    return list.filter(b => predicate(a, b))
  },
) as {
  <A, B>(predicate: Predicate2<A, B>, maybe: Maybe<A>, list: B[]): B[]
  <A, B>(predicate: Predicate2<A, B>, maybe: Maybe<A>): (list: B[]) => B[]
  <A, B>(predicate: Predicate2<A, B>): {
    (maybe: Maybe<A>, list: B[]): B[]
    (maybe: Maybe<A>): (list: B[]) => B[]
  }
}
