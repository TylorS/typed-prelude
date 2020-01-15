import { curry } from '@typed/lambda'
import { Match } from '@typed/logic'
import { unpack } from '@typed/maybe'
import { Validation } from './Validation'

export const validate = curry(__validate) as {
  <A, B, C>(error: A, match: Match<B, C>, value: B): Validation<A, C>
  <A, B, C>(error: A, match: Match<B, C>): (value: B) => Validation<A, C>
  <A>(error: A): {
    <B, C>(match: Match<B, C>, value: B): Validation<A, C>
    <B, C>(match: Match<B, C>): (value: B) => Validation<A, C>
  }
}

function __validate<A, B, C>(error: A, match: Match<B, C>, value: B): Validation<A, C> {
  return unpack(
    value => Validation.of(value),
    () => Validation.error(error),
    match(value),
  )
}
