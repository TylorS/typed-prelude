import { isJust, Nothing } from '@typed/maybe'
import { Match } from './types'

/**
 * Combine a list of matches into one.
 * @param matches :: [Match a b]
 * @returns :: Match a b
 */
export function oneOf<A, B>(matches: ReadonlyArray<Match<A, B>>): Match<A, B> {
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
