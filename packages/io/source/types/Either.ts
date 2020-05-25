import { Effect } from '@typed/effects'
import { Either, fromLeft, fromRight, isLeft, isRight, Left, map, Right } from '@typed/either'
import { concat } from '@typed/validation'
import { Mixed, Type } from '../Type'
import { Record } from './Record'

export type EitherType<E, A, B> = Type<'Either', E, Either<A, B>>

export const either = <A extends Mixed, B extends Mixed>(
  left: A,
  right: B,
): EitherType<Type.Env<A> & Type.Env<B>, Type.Output<A>, Type.Output<B>> => {
  const is = (u: unknown): u is Either<Type.Output<A>, Type.Output<B>> => {
    if (!Record.is(u)) {
      return false
    }

    const e = u as Either<unknown, unknown>

    if (isRight(e)) {
      return right.is(fromRight(e))
    }

    if (isLeft(e)) {
      return left.is(fromLeft(e))
    }

    return false
  }

  function* decode(u: unknown) {
    if (is(u)) {
      if (isLeft(u)) {
        const l = yield* left.decode(fromLeft(u))

        return map(Left.of, l)
      }

      const r = yield* right.decode(fromRight(u))

      return map(Right.of, r)
    }

    const r = yield* right.decode(u)

    if (isRight(r)) {
      return map(Right.of, r)
    }

    const l = yield* left.decode(u)

    if (isRight(l)) {
      return map(Left.of, l)
    }

    return concat(l, r)
  }

  return {
    name: 'Either',
    is,
    decode: decode as EitherType<
      Type.Env<A> & Type.Env<B>,
      Type.Output<A>,
      Type.Output<B>
    >['decode'],
    encode: Effect.of as EitherType<
      Type.Env<A> & Type.Env<B>,
      Type.Output<A>,
      Type.Output<B>
    >['encode'],
  }
}
