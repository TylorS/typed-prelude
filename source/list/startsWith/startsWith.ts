import { curry } from '@typed/lambda'

export const startsWith = curry(__startsWith) as {
  <A>(search: ArrayLike<A>, list: ArrayLike<A>): boolean
  <A>(search: ArrayLike<A>): (list: ArrayLike<A>) => boolean
}

function __startsWith<A>(search: ArrayLike<A>, list: ArrayLike<A>): boolean {
  const searchCount = search.length

  for (let i = 0; i < searchCount; ++i) {
    if (search[i] !== list[i]) {
      return false
    }
  }

  return true
}
