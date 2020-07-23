import { Either } from '@typed/either'
import { Future } from '@typed/future'
import { Type, Types } from './Hkt'
import { either, future } from './instances'
import { Functor } from './type-classes'
import { TypeParams } from './TypeParams'

declare function erase<F extends Types>(
  F: Functor<F>,
): <T extends Type<F>>(fa: T) => Type<F, [...TypeParams.DropLast<T, 1>, void]>

const eraseEither = erase(either)
const eraseFuture = erase(future)

export const _x: Either<Error, void> = eraseEither(Either.of<Error, number>(1))
export const _y: Future<unknown, Error, void> = eraseFuture(Future.of<Error, string>('hello'))
export const _z: Either<Error, string> = either.map(
  (x: number) => String(x + 1),
  Either.of<Error, number>(1),
)
