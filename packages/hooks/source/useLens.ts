import { TimerEnv } from '@typed/effects'
import { Arity1 } from '@typed/lambda'
import {
  GetPath,
  Lens,
  LensInput,
  LensOutput,
  PathLens,
  PathToRecord,
  PropLens,
} from '@typed/lenses'
import { getHookEnv } from './getHookEnv'
import { HookEffects, HooksManagerEnv, UseState } from './types'
import { useCallback } from './useCallback'
import { useEffectBy } from './useEffectBy'
import { useMemo } from './useMemo'

export function* useLens<A, B>(
  [getThing, setThing]: UseState<A>,
  lens: Lens<A, B>,
): HookEffects<unknown, UseState<B>> {
  const getRealThing = yield* useMemo(
    (get, l) =>
      function* () {
        return l.get(yield* get())
      },
    [getThing, lens] as const,
  )
  const updateThing = yield* useMemo(
    (setThing, l) =>
      function* (f: Arity1<B, B>) {
        return l.get(yield* setThing((a) => lens.update(f, a)))
      },
    [setThing, lens] as const,
  )

  return [getRealThing, updateThing] as const
}

export type UseLenses<A, R extends Record<string, Lens<A, any>>> = {
  readonly [K in keyof R]: R[K] extends PathLens<infer PK>
    ? A extends PathToRecord<PK>
      ? UseState<GetPath<A, PK>>
      : never
    : R[K] extends PropLens<infer PK>
    ? PK extends keyof A
      ? UseState<A[PK]>
      : never
    : A extends LensInput<R[K]>
    ? UseState<LensOutput<R[K]>>
    : never
}

export function* useLenses<A, R extends Record<string, Lens<A, any>>>(
  state: UseState<A>,
  lenses: R,
): HookEffects<HooksManagerEnv & TimerEnv, UseLenses<A, R>> {
  const hookEnv = yield* getHookEnv()
  const getHookKey = yield* useCallback((k: keyof R) => ({ [k]: [k, lenses[k], hookEnv] }), [
    lenses,
  ])
  // Get All keys
  const keys = yield* useMemo((ls) => Object.keys(ls).sort() as (keyof R)[], [lenses])
  // For all the keys call useLenses
  const states = yield* useEffectBy(keys, getHookKey, (k) => useLens(state, lenses[k]))
  // Recombine states into record using same keys
  return yield* useMemo(
    (ss) =>
      ss
        .map((s, i) => ({ [keys[i]]: s }))
        .reduce((x, y) => ({ ...x, ...y }), {} as UseLenses<A, R>),
    [states],
  )
}
