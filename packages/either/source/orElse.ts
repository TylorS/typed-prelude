import { curry } from '@typed/lambda'
import { Either } from './Either'
import { unpack } from './unpack'

export const orElse = curry(__orElse) as {
  <A, B>(value: A, validation: Either<B, A>): A
  <A>(value: A): <B>(validation: Either<B, A>) => A
}

function __orElse<A, B>(value: A, validation: Either<B, A>): A {
  return unpack(
    () => value,
    (b) => b,
    validation,
  )
}
