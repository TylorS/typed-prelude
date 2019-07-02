import { curry } from '@typed/lambda'

/**
 * Create a list of number from one number to another
 * @param from :: int
 * @param to :: int
 * @retuns :: [int]
 */
export const range: {
  (from: number, to: number): number[]
  (from: number): (to: number) => number[]
} = curry(__range)

function __range(from: number, to: number): number[] {
  const length = to - from

  if (length < 0) {
    return []
  }

  const list = Array(length)

  for (let i = 0; i < length; ++i) {
    list[i] = i + from
  }

  return list
}
