import { toString } from '../../common/toString'
import { curry } from '../../lambda'

export const join: {
  <A>(separator: string, list: A[]): string
  <A>(separator: string): (list: A[]) => string
} = curry(__join)

function __join<A>(separator: string, list: A[]): string {
  let str = ''
  const length = list.length

  for (let i = 0; i < length - 1; ++i) {
    str += `${toString(list[i])}${separator}`
  }

  return str + toString(list[length - 1])
}
