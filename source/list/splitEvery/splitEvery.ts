import { curry } from '../../lambda'

export const splitEvery: {
  <A>(amount: number, list: A[]): A[][]
  <A>(amount: number): (list: A[]) => A[][]
} = curry(function splitEvery<A>(amount: number, list: A[]): A[][] {
  if (amount <= 0) {
    return [list]
  }

  const result: A[][] = []
  let i = 0

  while (i < list.length) {
    result.push(list.slice(i, (i += amount)))
  }

  return result
})
