import { Arity1, curry, Predicate } from '@typed/lambda'

export const ifElse = curry(__ifElse) as {
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
}

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
