import * as M from '@typed/map'
import { Functor, TypeParams } from 'hkt-ts'

export const MapUri = '@typed/map' as const
export type MapUri = typeof MapUri

declare module 'hkt-ts' {
  export interface Hkts<Params extends ReadonlyArray<any>> {
    [MapUri]: ReadonlyMap<TypeParams.Second<Params>, TypeParams.First<Params>>
  }

  export interface HktTypeParams<T> {
    [MapUri]: T extends ReadonlyMap<infer A, infer B> ? [A, B] : never
  }
}

export const map: Functor<MapUri> = {
  URI: MapUri,
  map: M.map,
}
