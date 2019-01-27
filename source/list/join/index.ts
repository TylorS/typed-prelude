import { curry } from '@typed/lambda'

export const join = curry(__join) as {
  <A>(separator: string, list: A[]): string
  <A>(separator: string): (list: A[]) => string
}

function __join<A>(separator: string, list: A[]): string {
  let str = ''
  const length = list.length

  for (let i = 0; i < length - 1; ++i) {
    str += `${String(list[i])}${separator}`
  }

  return str + String(list[length - 1])
}
