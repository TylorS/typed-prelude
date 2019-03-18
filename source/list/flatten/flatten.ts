export type NestedArray<A> = Array<A | A[]>

export function flatten<A>(list: A[] | NestedArray<A>): A[] {
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
