import { curry, Is, Predicate } from '../../lambda'

export const filter = curry(
  <A>(predicate: Predicate<A>, list: A[]): A[] => list.filter(predicate),
) as {
  <A, B extends A>(predicate: Is<B>, list: A[]): B[]
  <B>(predicate: Is<B>): <A>(list: A[]) => B[]

  <A>(predicate: Predicate<A>, list: A[]): A[]
  <A>(predicate: Predicate<A>): (list: A[]) => A[]
}
