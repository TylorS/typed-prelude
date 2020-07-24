import { Effects, map } from '@typed/effects'
import { Functor } from 'hkt-ts'

export const EffectUri = '@typed/effects' as const
export type EffectUri = typeof EffectUri

declare module 'hkt-ts' {
  export interface Hkts<Params> {
    readonly [EffectUri]: Effects<TypeParams.Second<Params>, TypeParams.First<Params>>
  }

  export interface HktTypeParams<T> {
    readonly [EffectUri]: [T] extends [Effects<infer A, infer B>] ? [A, B] : never
  }
}

export const effect: Functor<EffectUri> = {
  URI: EffectUri,
  map,
}
