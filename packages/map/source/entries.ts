export const entries = <A, B>(map: ReadonlyMap<A, B>): IterableIterator<readonly [A, B]> =>
  map.entries()
