import { Resume } from '@typed/env'
import { Maybe, Nothing, unpack } from '@typed/maybe'
import { Capabilities, Effects } from '../Effect'

export type FailEnv<K extends PropertyKey, Err> = { readonly [Key in K]: Fail<Err> }

export type Fail<Err> = <A>(error: Err) => Resume<Failure<Err, A>>

export const Fail: Fail<any> = <A>(error: any) => Resume.of(Failure.of<any, A>(error))

export type FailureTypes<E extends Effects<any, any>> = keyof FailuresOf<E>
export type FailuresOf<E extends Effects<any, any>> = Pick<
  Capabilities<E>,
  FailureKeys<Capabilities<E>>
>
export type ErrorOf<E extends Effects<any, any>, K extends FailureTypes<E>> = FailuresOf<
  E
>[K] extends Fail<infer R>
  ? R
  : never

type FailureKeys<A> = {
  [K in keyof A]: A[K] extends Fail<any> ? K : never
}[keyof A]

export class Failure<Err, A> {
  public static of = <Err, A>(error: Err, value: Maybe<A> = Nothing) =>
    new Failure<Err, A>(error, value)

  constructor(readonly error: Err, readonly value: Maybe<A>) {}

  public readonly unpack = <B>(left: (err: Err) => B, right: (value: A) => B): B =>
    unpack(right, () => left(this.error), this.value)
}
