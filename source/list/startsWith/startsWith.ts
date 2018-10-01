import { curry } from '../../lambda'

export const startsWith: StartsWith = curry(__startsWith)

export type StartsWith = {
  <A>(search: ArrayLike<A>, list: A[]): boolean
  <A>(search: ArrayLike<A>): (list: A[]) => boolean
}

function __startsWith<A>(search: ArrayLike<A>, list: A[]): boolean {
  const searchCount = search.length

  for (let i = 0; i < searchCount; ++i) {
    if (search[i] !== list[i]) {
      return false
    }
  }

  return true
}
