import { Either } from '@typed/either'
import { Future } from '@typed/future'
import { L } from 'ts-toolbelt'
import { Type, Types, ValuesOf } from './Hkt'
import { either, future } from './instances'
import { Functor } from './type-classes'

declare function erase<F extends Types>(
  F: Functor<F>,
): <T extends Type<F>>(fa: T) => Type<F, [...L.Pop<ValuesOf<T>>, void]>

const eraseEither = erase(either)
const eraseFuture = erase(future)

export const _x = eraseEither(Either.of<Error, number>(1))
export const _y = eraseFuture(Future.of<Error, string>('hello'))
export const _z = either.map((x: number) => x + 1, Either.of<Error, number>(1))
