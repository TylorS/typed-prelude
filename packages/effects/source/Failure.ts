import { Resume } from '@typed/env'

export type Fail<Err> = { readonly failure: <A>(error: Err) => Resume<Failure<Err, A>> }

export class Failure<Err, A> {
  public static of = <Err, A>(error: Err, value: A) => new Failure<Err, A>(error, value)
  public readonly stack!: string

  constructor(readonly error: Err, readonly value: A) {
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, this.constructor)
    }
  }
}
