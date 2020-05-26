import { Effect } from '@typed/effects'
import { Either, map, Right, unpack } from '@typed/either'
import { pipeline } from '@typed/lambda'
import { fromJust, isJust, isNothing, Just, Maybe, Nothing } from '@typed/maybe'
import { DecodeError } from '../Decoder'
import { Mixed, Type } from '../Type'
import { Record } from './Record'

export type MaybeType<E, A> = Type<'Maybe', E, Maybe<A>>

export const maybe = <A extends Mixed>(type: A): MaybeType<Type.Env<A>, Type.Output<A>> => {
  const is = (u: unknown): u is Maybe<Type.Output<A>> => {
    if (!Record.is(u)) {
      return false
    }

    const m = u as Maybe<unknown>

    return isNothing(m) || isJust(m)
  }

  function* decode(i: unknown) {
    if (is(i)) {
      if (isNothing(i)) {
        return Right.of(i)
      }

      const either = yield* type.decode(fromJust(i))

      return map(Just.of, either)
    }

    const either = (yield* type.decode(i)) as Either<readonly DecodeError[], Type.Output<A>>

    return Right.of(
      pipeline(
        either,
        unpack((): Maybe<Type.Output<A>> => Nothing, Just.of),
      ),
    )
  }

  return {
    name: 'Maybe',
    is,
    decode: decode as MaybeType<Type.Env<A>, Type.Output<A>>['decode'],
    encode: Effect.of as MaybeType<Type.Env<A>, Type.Output<A>>['encode'],
  }
}
