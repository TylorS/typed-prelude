import { Env, map } from '@typed/env'
import { Functor, TypeParams } from 'hkt-ts'

export const EnvUri = '@typed/env' as const
export type EnvUri = typeof EnvUri

declare module 'hkt-ts' {
  export interface Hkts<Params> {
    readonly [EnvUri]: Env<TypeParams.Second<Params>, TypeParams.First<Params>>
  }

  export interface HktTypeParams<T> {
    readonly [EnvUri]: [T] extends [Env<infer A, infer B>] ? [A, B] : never
  }
}

export const env: Functor<EnvUri> = {
  URI: EnvUri,
  map,
}
