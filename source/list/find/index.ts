import { curry, Predicate } from '../../lambda'
import { map, Maybe } from '../../maybe'
import { findIndex } from '../findIndex'

export const find: {
  <A>(predicate: Predicate<A>, list: A[]): Maybe<A>
  <A>(predicate: Predicate<A>): (list: A[]) => Maybe<A>
} = curry(
  <A>(predicate: Predicate<A>, list: A[]): Maybe<A> =>
    map(index => list[index], findIndex(predicate, list)),
)
