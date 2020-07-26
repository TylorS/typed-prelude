import { ap, chain, Future, map, PureFuture } from '@typed/future'
import { Monad, TypeParams } from 'hkt-ts'

export const FutureUri = '@typed/future' as const
export type FutureUri = typeof FutureUri

declare module 'hkt-ts' {
  export interface Hkts<Params> {
    [FutureUri]: Future<
      TypeParams.Third<Params>,
      TypeParams.Second<Params>,
      TypeParams.First<Params>
    >
  }

  export interface HktTypeParams<T> {
    [FutureUri]: [T] extends [PureFuture<infer A, infer B>]
      ? [unknown, A, B]
      : [T] extends [Future<infer E, infer A, infer B>]
      ? [E, A, B]
      : never
  }

  export interface HktSignatureOverride {
    [FutureUri]: {
      of: typeof Future.of
      ap: typeof ap
      map: typeof map
      chain: typeof chain
    }
  }
}

export const future: Monad<FutureUri, { of: 'of'; ap: 'ap'; map: 'map'; chain: 'chain' }> = {
  URI: FutureUri,
  of: Future.of,
  ap,
  map,
  chain,
}
