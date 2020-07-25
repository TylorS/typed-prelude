import { ap, apSeq, chain, Env, map, Pure } from '@typed/env'
import { Monad, TypeParams } from 'hkt-ts'

export const EnvUri = '@typed/env' as const
export type EnvUri = typeof EnvUri

declare module 'hkt-ts' {
  export interface Hkts<Params> {
    readonly [EnvUri]: Env<TypeParams.Second<Params>, TypeParams.First<Params>>
  }

  export interface HktTypeParams<T> {
    readonly [EnvUri]: [T] extends [Env<infer A, infer B>] ? [A, B] : never
  }

  export interface HktSignatureOverride {
    readonly [EnvUri]: {
      readonly of: typeof Pure.of
      readonly ap: typeof ap
      readonly chain: typeof chain
    }
  }
}

export const env: Monad<EnvUri> = {
  URI: EnvUri,
  of: Pure.of,
  map,
  ap,
  chain,
}

export const envSeq: Monad<EnvUri> = {
  ...env,
  ap: apSeq,
}
