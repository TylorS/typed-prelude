export type NestedArray<A> = ReadonlyArray<A | ReadonlyArray<A>>

export function flatten<A>(list: ReadonlyArray<A> | NestedArray<A>): A[] {
  return (list as A[]).reduce(flattenReducer, [] as A[])
}

function flattenReducer<A>(acc: A[], value: A | A[]): A[] {
  if (Array.isArray(value)) {
    acc.push(...flatten<A>(value))
  } else {
    acc.push(value)
  }

  return acc
}
