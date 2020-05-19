import { TimerEnv } from '@typed/effects'
import { Arity1 } from '@typed/lambda'
import { Lens, LensOutput, PropLens } from '@typed/lenses'
import { HookEffects, HooksManagerEnv, InitialState, UseState } from './types'
import { useEffectBy } from './useEffectBy'
import { useMemo } from './useMemo'
import { useState } from './useState'

export function* useLens<A, B>(
  [getThing, setThing]: UseState<A>,
  lens: Lens<A, B>,
): HookEffects<unknown, UseState<B>> {
  const getRealThing = yield* useMemo(
    (get) =>
      function* () {
        return lens.get(yield* get())
      },
    [getThing],
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

export function* useLenses<A, R extends Record<string, Lens<A, any>>>(
  state: UseState<A>,
  lenses: R,
): HookEffects<
  HooksManagerEnv & TimerEnv,
  {
    readonly [K in keyof R]: R[K] extends PropLens<infer PK>
      ? PK extends keyof A
        ? A[PK]
        : never
      : UseState<LensOutput<R[K]>>
  }
> {
  // Get All keys
  const keys = yield* useMemo((ls) => Object.keys(ls).sort() as (keyof R)[], [lenses])
  // For all the keys call useLenses
  const states = yield* useEffectBy(keys, Array, (k) => useLens(state, lenses[k]))
  // Recombine states into record using same keys
  return yield* useMemo(
    (ss) =>
      ss
        .map((s, i) => ({ [keys[i]]: s }))
        .reduce(
          (x, y) => ({ ...x, ...y }),
          {} as {
            readonly [K in keyof R]: R[K] extends PropLens<infer PK>
              ? PK extends keyof A
                ? A[PK]
                : never
              : UseState<LensOutput<R[K]>>
          },
        ),
    [states],
  )
}
