import { ap, chain, map, RemoteData } from '@typed/remote-data'
import { Monad, TypeParams } from 'hkt-ts'

export const RemoteDataUri = '@typed/remote-data' as const
export type RemoteDataUri = typeof RemoteDataUri

declare module 'hkt-ts' {
  export interface Hkts<Params extends ReadonlyArray<any>> {
    [RemoteDataUri]: RemoteData<TypeParams.Second<Params>, TypeParams.First<Params>>
  }

  export interface HktTypeParams<T> {
    [RemoteDataUri]: [T] extends [RemoteData<infer A, infer B>] ? [A, B] : never
  }
}

export const remoteData: Monad<RemoteDataUri> = {
  URI: RemoteDataUri,
  of: RemoteData.of,
  map,
  chain,
  ap,
}
