export type NestedArray<A> = ReadonlyArray<A | ReadonlyArray<A>>

/**
 * Flatten an array of arrays into a single array.
 */
export function flatten<A>(
  list:
    | ReadonlyArray<A>
    | NestedArray<A>
    | NestedArray<NestedArray<A>>
    | NestedArray<NestedArray<NestedArray<A>>>
    | NestedArray<NestedArray<NestedArray<NestedArray<A>>>>,
): A[] {
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
