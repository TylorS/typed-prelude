import { curry } from '../../lambda'

export const join: {
  <A>(separator: string, list: A[]): string
  <A>(separator: string): (list: A[]) => string
} = curry(__join)

function __join<A>(separator: string, list: A[]): string {
  let str = ''
  const length = list.length

  for (let i = 0; i < length - 1; ++i) {
    str += `${String(list[i])}${separator}`
  }

  return str + String(list[length - 1])
}
