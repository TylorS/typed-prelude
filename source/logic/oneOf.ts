import { isJust, Nothing } from 'source/maybe'
import { Match } from './types'

export function oneOf<A, B>(matches: Array<Match<A, B>>): Match<A, B> {
  return (a: A) => {
    for (const match of matches) {
      const value = match(a)

      if (isJust(value)) {
        return value
      }
    }

    return Nothing
  }
}
