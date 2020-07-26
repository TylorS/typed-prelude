import { ap, apSeq, chain, Effect, Effects, map } from '@typed/effects'
import { Monad, TypeParams } from 'hkt-ts'

export const EffectUri = '@typed/effects' as const
export type EffectUri = typeof EffectUri

declare module 'hkt-ts' {
  export interface Hkts<Params> {
    [EffectUri]: Effects<TypeParams.Second<Params>, TypeParams.First<Params>>
  }

  export interface HktTypeParams<T> {
    [EffectUri]: [T] extends [Effects<infer A, infer B>] ? [A, B] : never
  }

  export interface HktSignatureOverride {
    [EffectUri]: {
      map: typeof map
      chain: typeof chain
      ap: typeof ap
      apSeq: typeof apSeq
    }
  }
}

export const effect: Monad<EffectUri, { map: 'map'; chain: 'chain'; ap: 'ap' }> = {
  URI: EffectUri,
  of: Effect.of,
  map,
  chain,
  ap,
}

export const effectSeq: Monad<EffectUri, { map: 'map'; chain: 'chain'; ap: 'apSeq' }> = {
  ...effect,
  ap: apSeq,
}
