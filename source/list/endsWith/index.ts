import { curry } from '../../lambda'
import { equals } from '../../logic'

export const endsWith = curry(<A>(expected: A[], list: A[]) =>
  equals(expected, list.slice(list.length - expected.length)),
)
