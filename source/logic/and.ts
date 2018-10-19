import { curry, Is, Predicate } from '../lambda'

export const and = curry(__and) as {
  <C, A extends C, B extends C>(predicate1: Is<A>, predicate2: Is<B>, value: C): value is A & B
  <C, A extends C, B extends C>(predicate1: Is<A>, predicate2: Is<B>): (value: C) => value is A & B
  <C, A extends C>(predicate1: Is<A>): {
    <B extends C>(predicate2: Is<B>, value: C): value is A & B
    <B extends C>(predicate2: Is<B>): (value: C) => value is A & B
  }

  <A>(predicate1: Predicate<A>, predicate2: Predicate<A>, value: A): boolean
  <A>(predicate1: Predicate<A>, predicate2: Predicate<A>): Predicate<A>
  <A>(predicate1: Predicate<A>): {
    (predicate2: Predicate<A>, value: A): boolean
    (predicate2: Predicate<A>): Predicate<A>
  }
}

function __and<A>(predicate1: Predicate<A>, predicate2: Predicate<A>, value: A): boolean {
  return predicate1(value) && predicate2(value)
}
