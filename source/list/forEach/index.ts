import { Arity1, curry } from '@typed/lambda'

export const forEach = curry(__forEach) as {
  <A>(f: Arity1<A, void>, list: A[]): A[]
  <A>(f: Arity1<A, void>): (list: A[]) => A[]
}

function __forEach<A>(f: Arity1<A, void>, list: A[]): A[] {
  list.forEach(f)
  return list
}
