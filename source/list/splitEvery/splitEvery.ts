import { curry } from '@typed/lambda'

export const splitEvery = curry(function splitEvery<A>(amount: number, list: A[]): A[][] {
  if (amount <= 0) {
    return [list]
  }

  const result: A[][] = []
  let i = 0

  while (i < list.length) {
    result.push(list.slice(i, (i += amount)))
  }

  return result
}) as {
  <A>(amount: number, list: A[]): A[][]
  <A>(amount: number): (list: A[]) => A[][]
}
