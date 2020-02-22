import { Effect, Effects } from '@typed/effects'
import { Either } from '@typed/either'
import { ArgsOf } from '@typed/lambda'
import { futurify, NodeCallback, NodeCallbackFn } from './futurify'

export function effectify<R>(
  fn: (cb: NodeCallback<R>) => void,
): () => Effects<never, Either<Error, R>>

export function effectify<A, R>(
  fn: (a: A, cb: NodeCallback<R>) => void,
): (a: A) => Effects<never, Either<Error, R>>

export function effectify<A, B, R>(
  fn: (a: A, b: B, cb: NodeCallback<R>) => void,
): (a: A, b: B) => Effects<never, Either<Error, R>>

export function effectify<A, B, C, R>(
  fn: (a: A, b: B, c: C, cb: NodeCallback<R>) => void,
): (a: A, b: B, c: C) => Effects<never, Either<Error, R>>

export function effectify<A, B, C, D, R>(
  fn: (a: A, b: B, c: C, d: D, cb: NodeCallback<R>) => void,
): (a: A, b: B, c: C, d: D) => Effects<never, Either<Error, R>>

export function effectify<A, B, C, D, E, R>(
  fn: (a: A, b: B, c: C, d: D, e: E, cb: NodeCallback<R>) => void,
): (a: A, b: B, c: C, d: D, e: E) => Effects<never, Either<Error, R>>

export function effectify<A, B, C, D, E, F, R>(
  fn: (a: A, b: B, c: C, d: D, e: E, f: F, cb: NodeCallback<R>) => void,
): (a: A, b: B, c: C, d: D, e: E, f: F) => Effects<never, Either<Error, R>>

export function effectify<A, B, C, D, E, F, G, R>(
  fn: (a: A, b: B, c: C, d: D, e: E, f: F, g: G, cb: NodeCallback<R>) => void,
): (a: A, b: B, c: C, d: D, e: E, f: F, g: G) => Effects<never, Either<Error, R>>

export function effectify<A extends NodeCallbackFn>(fn: A) {
  const toFuture = futurify(fn)

  return (...args: ArgsOf<typeof toFuture>) => Effect.fromEnv(toFuture(...args))
}
