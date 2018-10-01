import { curry } from '../../lambda'

export const concat: {
  <A>(head: A[], tail: A[]): A[]
  <A>(head: A[]): (tail: A[]) => A[]
} = curry((a, b) => a.concat(b))
