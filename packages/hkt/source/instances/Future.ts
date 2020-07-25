import { ap, chain, Future, map, PureFuture } from '@typed/future'
import { Monad, TypeParams } from 'hkt-ts'

export const FutureUri = '@typed/future' as const
export type FutureUri = typeof FutureUri

declare module 'hkt-ts' {
  export interface Hkts<Params extends ReadonlyArray<any>> {
    readonly [FutureUri]: Future<
      TypeParams.Third<Params>,
      TypeParams.Second<Params>,
      TypeParams.First<Params>
    >
  }

  export interface HktTypeParams<T> {
    readonly [FutureUri]: [T] extends [PureFuture<infer A, infer B>]
      ? [unknown, A, B]
      : [T] extends [Future<infer E, infer A, infer B>]
      ? [E, A, B]
      : never
  }
}

export const future: Monad<FutureUri> = {
  URI: FutureUri,
  of: Future.of,
  ap,
  map,
  chain,
}
