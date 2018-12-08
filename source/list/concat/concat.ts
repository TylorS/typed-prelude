import { curry } from '../../lambda'

export const concat = curry((a, b) => a.concat(b)) as {
  <A>(head: A[], tail: A[]): A[]
  <A>(head: A[]): (tail: A[]) => A[]
}
