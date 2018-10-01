import { Arity1, curry } from '../../lambda'

export const groupBy: {
  <A, B extends PropertyKey>(f: Arity1<A, B>, list: A[]): Record<B, A[]>
  <A, B extends PropertyKey>(f: Arity1<A, B>): (list: A[]) => Record<B, A[]>
} = curry(__groupBy)

function __groupBy<A, B extends PropertyKey>(f: Arity1<A, B>, list: A[]): Record<B, A[]> {
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
