import { map, RemoteData } from '@typed/remote-data'
import { Functor } from '../type-classes'
import { TypeParams } from './TypeParams'

declare module '../Hkt' {
  export interface Hkts<Values> {
    readonly RemoteData: RemoteData<TypeParams.Second<Values>, TypeParams.First<Values>>
  }

  export interface HktValues<T> {
    readonly RemoteData: T extends RemoteData<infer A, infer B> ? [A, B] : never
  }
}

export const remoteData: Functor<'RemoteData'> = {
  map,
}
