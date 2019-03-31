import { curry } from '@typed/lambda'

export const zip = curry(function zip<A, B>(
  xs: ReadonlyArray<A>,
  ys: ReadonlyArray<B>,
): Array<[A, B]> {
  const length = Math.min(xs.length, ys.length)
  const newList = Array(length)

  for (let i = 0; i < length; ++i) {
    newList[i] = [xs[i], ys[i]]
  }

  return newList
}) as {
  <A, B>(xs: ReadonlyArray<A>, ys: ReadonlyArray<B>): Array<[A, B]>
  <A>(xs: ReadonlyArray<A>): <B>(ys: ReadonlyArray<B>) => Array<[A, B]>
}
