import { Arity1, curry, Predicate } from '../lambda'

export const ifElse: {
  <A, B>(predicate: Predicate<A>, thenFn: Arity1<A, B>, elseFn: Arity1<A, B>, value: A): B
  <A, B>(predicate: Predicate<A>, thenFn: Arity1<A, B>, elseFn: Arity1<A, B>): (value: A) => B
  <A, B>(predicate: Predicate<A>, thenFn: Arity1<A, B>): {
    (elseFn: Arity1<A, B>, value: A): B
    (elseFn: Arity1<A, B>): (value: A) => B
  }
  <A>(predicate: Predicate<A>): {
    <B>(thenFn: Arity1<A, B>, elseFn: Arity1<A, B>, value: A): B
    <B>(thenFn: Arity1<A, B>, elseFn: Arity1<A, B>): (value: A) => B
    <B>(thenFn: Arity1<A, B>): {
      (elseFn: Arity1<A, B>, value: A): B
      (elseFn: Arity1<A, B>): (value: A) => B
    }
  }
} = curry(__ifElse)

function __ifElse<A, B>(
  predicate: Predicate<A>,
  thenFn: Arity1<A, B>,
  elseFn: Arity1<A, B>,
  value: A,
): B {
  if (predicate(value)) {
    return thenFn(value)
  }

  return elseFn(value)
}
