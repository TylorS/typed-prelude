import { curry, IO } from '@typed/lambda'

export const getOr: {
  <A, B>(key: A, fallback: IO<B>, map: ReadonlyMap<A, B>): B
  <A, B>(key: A, fallback: IO<B>): (map: ReadonlyMap<A, B>) => B

  <A>(key: A): {
    <B>(fallback: IO<B>, map: ReadonlyMap<A, B>): B
    <B>(fallback: IO<B>): (map: ReadonlyMap<A, B>) => B
  }
} = curry(function getOr<A, B>(key: A, fallback: IO<B>, map: ReadonlyMap<A, B>): B {
  return map.has(key) ? map.get(key)! : fallback()
})
