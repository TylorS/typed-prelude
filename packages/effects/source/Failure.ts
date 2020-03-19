import { Either } from '@typed/either'
import { Resume } from '@typed/env'
import { Maybe, unpack } from '@typed/maybe'

export type Fail<Err> = { readonly failure: <A>(error: Err) => Resume<Failure<Err, A>> }

export class Failure<Err, A> {
  public static of = <Err, A>(error: Err, value: Maybe<A>) => new Failure<Err, A>(error, value)

  constructor(readonly error: Err, readonly value: Maybe<A>) {}

  public readonly toEither = (): Either<Err, A> =>
    unpack(
      value => Either.of(value),
      () => Either.left(this.error),
      this.value,
    )
}
