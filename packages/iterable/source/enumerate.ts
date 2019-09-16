export function* enumerate<A>(iterable: Iterable<A>): Iterable<readonly [A, number]> {
  let i = 0

  for (const value of iterable) {
    yield [value, i]
    i++
  }
}
