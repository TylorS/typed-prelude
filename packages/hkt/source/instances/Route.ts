import { map, Route } from '@typed/routing'
import { Functor, TypeParams } from 'hkt-ts'

export const RouteUri = '@typed/routing' as const
export type RouteUri = typeof RouteUri

declare module 'hkt-ts' {
  export interface Hkts<Params extends ReadonlyArray<any>> {
    readonly [RouteUri]: Route<TypeParams.Second<Params>, TypeParams.First<Params>>
  }

  export interface HktTypeParams<T> {
    readonly [RouteUri]: T extends Route<infer A, infer B> ? [A, B] : never
  }
}

export const route: Functor<RouteUri> = {
  URI: RouteUri,
  map,
}
