import { ap, apSeq, chain, Effect, Effects, map } from '@typed/effects'
import { Monad, MonadOptionsDefault, TypeParams } from 'hkt-ts'

export const EffectUri = '@typed/effects' as const
export type EffectUri = typeof EffectUri

declare module 'hkt-ts' {
  export interface Hkts<Params> {
    readonly [EffectUri]: Effects<TypeParams.Second<Params>, TypeParams.First<Params>>
  }

  export interface HktTypeParams<T> {
    readonly [EffectUri]: [T] extends [Effects<infer A, infer B>] ? [A, B] : never
  }

  export interface HktSignatureOverride {
    readonly [EffectUri]: {
      readonly chain: typeof chain
      readonly ap: typeof ap
      readonly apSeq: typeof apSeq
    }
  }
}

export const effect: Monad<EffectUri> = {
  URI: EffectUri,
  of: Effect.of,
  map,
  chain,
  ap,
}

export const effectSeq: Monad<
  EffectUri,
  Omit<MonadOptionsDefault, 'ap'> & { readonly ap: 'apSeq' }
> = {
  ...effect,
  ap: apSeq,
}
