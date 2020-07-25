import { Effect } from '@typed/effects'
import { Either } from '@typed/either'
import { Future } from '@typed/future'
import { Functor, Type, TypeParams, UriOf } from 'hkt-ts'
import { effect, either, future } from './instances'

declare function erase<F extends Functor>(
  F: F,
): <T extends Type<UriOf<F>>>(fa: T) => Type<UriOf<F>, [...TypeParams.DropLast<T, 1>, void]>

const eraseEither = erase(either)
const eraseFuture = erase(future)
const eraseEffect = erase(effect)

export const _w = eraseEffect(Effect.of(1))
export const _x: Either<Error, void> = eraseEither(Either.of<Error, number>(1))
export const _y: Future<unknown, Error, void> = eraseFuture(Future.of<Error, string>('hello'))
export const _z: Either<Error, string> = either.map(
  (x: number) => String(x + 1),
  Either.of<Error, number>(1),
)
