import { Arity3 } from '../lambda'

export function includesWith<A, B>(pred: Arity3<A, B, number, boolean>, x: A, list: B[]): boolean {
  let idx = 0
  const len = list.length

  while (idx < len) {
    if (pred(x, list[idx], idx)) {
      return true
    }
    idx += 1
  }
  return false
}
