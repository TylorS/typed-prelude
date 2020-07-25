import { map, RemoteData } from '@typed/remote-data'
import { Functor, TypeParams } from 'hkt-ts'

export const RemoteDataUri = '@typed/remote-data' as const
export type RemoteDataUri = typeof RemoteDataUri

declare module 'hkt-ts' {
  export interface Hkts<Params extends ReadonlyArray<any>> {
    readonly [RemoteDataUri]: RemoteData<TypeParams.Second<Params>, TypeParams.First<Params>>
  }

  export interface HktTypeParams<T> {
    readonly [RemoteDataUri]: [T] extends [RemoteData<infer A, infer B>] ? [A, B] : never
  }
}

export const remoteData: Functor<RemoteDataUri> = {
  URI: RemoteDataUri,
  map,
}
