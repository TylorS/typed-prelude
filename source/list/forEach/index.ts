import { Arity1, curry } from '../../lambda'

export const forEach: {
  <A>(f: Arity1<A, void>, list: A[]): A[]
  <A>(f: Arity1<A, void>): (list: A[]) => A[]
} = curry(__forEach)

function __forEach<A>(f: Arity1<A, void>, list: A[]): A[] {
  list.forEach(f)
  return list
}
