import { Arity1, curry } from '@typed/lambda'

/**
 * Converts a list of values into groups keyed by passed in function.
 * @param f :: a -> b
 * @param list :: [a]
 * @returns { [key: B]: A }
 */
export const groupBy = curry(__groupBy) as {
  <A, B extends PropertyKey>(f: Arity1<A, B>, list: ReadonlyArray<A>): Record<B, A[]>
  <A, B extends PropertyKey>(f: Arity1<A, B>): (list: ReadonlyArray<A>) => Record<B, A[]>
}

function __groupBy<A, B extends PropertyKey>(
  f: Arity1<A, B>,
  list: ReadonlyArray<A>,
): Record<B, A[]> {
  return list.reduce(groupByReducer(f), {} as Record<B, A[]>)
}

function groupByReducer<A, B extends PropertyKey>(f: Arity1<A, B>) {
  return (acc: Record<B, A[]>, x: A) => {
    const key = f(x)

    if (!acc[key]) {
      acc[key] = [x]
    } else {
      acc[key].push(x)
    }

    return acc
  }
}
