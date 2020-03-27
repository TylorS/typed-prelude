import { Resume } from '@typed/env'
import { Maybe, Nothing, unpack } from '@typed/maybe'

export type FailEnv<K extends PropertyKey, Err> = { readonly [Key in K]: Fail<Err> }

export type Fail<Err> = <A>(error: Err) => Resume<Failure<Err, A>>

export const Fail: Fail<any> = <A>(error: any) => Resume.of(Failure.of<any, A>(error))

export class Failure<Err, A> {
  public static of = <Err, A>(error: Err, value: Maybe<A> = Nothing) =>
    new Failure<Err, A>(error, value)

  constructor(readonly error: Err, readonly value: Maybe<A>) {}

  public readonly unpack = <B>(left: (err: Err) => B, right: (value: A) => B): B =>
    unpack(right, () => left(this.error), this.value)
}
