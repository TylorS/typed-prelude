import { isJust } from './isJust'
import { Maybe } from './Maybe'
import { unwrap } from './unwrap'

export const unpack = <A, B>(fn: (value: A) => B, fallback: () => B, maybe: Maybe<A>): B =>
  isJust(maybe) ? unwrap(fn, maybe) : fallback()
