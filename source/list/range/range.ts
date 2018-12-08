import { curry } from '../../lambda'

export const range = curry(__range)

function __range(from: number, to: number): number[] {
  const length = to - from
  const list = Array(length)

  for (let i = 0; i < length; ++i) {
    list[i] = i + from
  }

  return list
}
