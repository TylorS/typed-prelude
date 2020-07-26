import { combineRoutes, map, Route } from '@typed/routing'
import { Functor, Semigroup, TypeParams } from 'hkt-ts'

export const RouteUri = '@typed/routing' as const
export type RouteUri = typeof RouteUri

declare module 'hkt-ts' {
  export interface Hkts<Params extends ReadonlyArray<any>> {
    [RouteUri]: Route<TypeParams.Second<Params>, TypeParams.First<Params>>
  }

  export interface HktTypeParams<T> {
    [RouteUri]: T extends Route<infer A, infer B> ? [A, B] : never
  }

  export interface HktSignatureOverride {
    [RouteUri]: {
      concat: typeof combineRoutes
    }
  }
}

export const route: Functor<RouteUri> & Semigroup<RouteUri, { concat: 'concat' }> = {
  URI: RouteUri,
  map,
  concat: combineRoutes,
}
