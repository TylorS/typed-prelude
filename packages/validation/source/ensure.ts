import { curry, Predicate } from '@typed/lambda'
import { Validation } from './Validation'

export const ensure = curry(__ensure) as {
  <A, B>(error: A, predicate: Predicate<B>, value: B): Validation<A, B>
  <A, B>(error: A, predicate: Predicate<B>): (value: B) => Validation<A, B>
  <A>(error: A): {
    <B>(predicate: Predicate<B>, value: B): Validation<A, B>
    <B>(predicate: Predicate<B>): (value: B) => Validation<A, B>
  }
}

function __ensure<A, B>(error: A, predicate: Predicate<B>, value: B): Validation<A, B> {
  return predicate(value) ? Validation.of(value) : Validation.error(error)
}
