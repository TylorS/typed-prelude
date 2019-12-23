import { Disposable } from '@typed/disposable'
import { unpack } from '@typed/either'
import { runPure } from '@typed/env'
import { curry } from '@typed/lambda'
import { Future } from './Future'

export const fork = curry(__fork) as {
  <A, B>(
    left: (value: A) => Disposable,
    right: (value: B) => Disposable,
    future: Future<never, A, B>,
  ): Disposable

  <A, B>(left: (value: A) => Disposable, right: (value: B) => Disposable): (
    future: Future<never, A, B>,
  ) => Disposable

  <A>(left: (value: A) => Disposable): {
    <B>(right: (value: B) => Disposable, future: Future<never, A, B>): Disposable
    <B>(right: (value: B) => Disposable, future: Future<never, A, B>): Disposable
  }
}

function __fork<A, B>(
  left: (value: A) => Disposable,
  right: (value: B) => Disposable,
  future: Future<never, A, B>,
): Disposable {
  return runPure(unpack(left, right), future)
}
