import { Fn } from '@typed/lambda'
import { didRefChange } from './didRefChange'
import { useRef } from './useRef'
import { useState } from './useState'

export function* useMemo<A extends readonly any[], B>(fn: Fn<A, B>, deps: A) {
  const [depsRef, setDepsRef] = yield* useRef(deps)
  const [getValue, setValue] = yield* useState(() => fn(...deps))
  const depsUpdated = didRefChange(depsRef, setDepsRef, deps)

  if (depsUpdated) {
    yield* setValue(() => fn(...deps))
  }

  return getValue()
}
