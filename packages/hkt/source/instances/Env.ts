import { ap, apSeq, chain, Env, map, Pure } from '@typed/env'
import { Monad, TypeParams } from 'hkt-ts'

export const EnvUri = '@typed/env' as const
export type EnvUri = typeof EnvUri

declare module 'hkt-ts' {
  export interface Hkts<Params> {
    [EnvUri]: Env<TypeParams.Second<Params>, TypeParams.First<Params>>
  }

  export interface HktTypeParams<T> {
    [EnvUri]: [T] extends [Env<infer A, infer B>] ? [A, B] : never
  }

  export interface HktSignatureOverride {
    [EnvUri]: {
      of: typeof Pure.of
      ap: typeof ap
      chain: typeof chain
      apSeq: typeof apSeq
    }
  }
}

export const env: Monad<EnvUri, { of: 'of'; ap: 'ap'; chain: 'chain' }> = {
  URI: EnvUri,
  of: Pure.of,
  map,
  ap,
  chain,
}

export const envSeq: Monad<EnvUri, { of: 'of'; ap: 'apSeq'; chain: 'chain' }> = {
  ...env,
  ap: apSeq,
}
