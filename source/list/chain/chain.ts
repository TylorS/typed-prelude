import { Arity1, curry } from '@typed/lambda'

export const chain = curry((f, list) => unnest(list.map(f))) as {
  <A, B>(fn: Arity1<A, B[]>, list: A[]): B[]
  <A, B>(fn: Arity1<A, B[]>): (list: A[]) => B[]
}

export function unnest<A>(nestedList: A[][]): A[] {
  const unnestedList: A[] = []

  for (const list of nestedList) {
    unnestedList.push(...list)
  }

  return unnestedList
}
