import { Effects } from '@typed/effects'
import { Fn } from '@typed/lambda'
import { fromJust, Just } from '@typed/maybe'
import { HookEffects, InitialState } from './types'
import { useDepChange } from './useDepChange'
import { useRef } from './useRef'

export function* useMemo<E, A extends readonly any[], B>(fn: Fn<A, B>, deps: A): HookEffects<E, B> {
  const [ref, setRef] = yield* useRef<unknown, [B]>(InitialState.fromIO(() => [fn(...deps)]))
  const depsUpdated = yield* useDepChange(deps, false)

  if (depsUpdated) {
    setRef([fn(...deps)])
  }

  return fromJust(ref.current as Just<[B]>)[0]
}

export function* useMemoEffect<E, A extends readonly any[], B>(
  fn: Fn<A, Effects<E, B>>,
  deps: A,
): HookEffects<E, B> {
  const [ref, setValue] = yield* useRef<E, readonly [B]>(function* () {
    const value = yield* fn(...deps)

    return [value] as const
  })
  const depsUpdated = yield* useDepChange(deps, false)

  if (depsUpdated) {
    setValue([yield* fn(...deps)] as const)
  }

  return fromJust(ref.current as Just<[B]>)[0]
}
