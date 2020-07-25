import { combineRoutes, map, Route } from '@typed/routing'
import { Functor, Semigroup, TypeParams } from 'hkt-ts'

export const RouteUri = '@typed/routing' as const
export type RouteUri = typeof RouteUri

declare module 'hkt-ts' {
  export interface Hkts<Params extends ReadonlyArray<any>> {
    readonly [RouteUri]: Route<TypeParams.Second<Params>, TypeParams.First<Params>>
  }

  export interface HktTypeParams<T> {
    readonly [RouteUri]: T extends Route<infer A, infer B> ? [A, B] : never
  }

  export interface HktSignatureOverride {
    readonly [RouteUri]: {
      readonly concat: typeof combineRoutes
    }
  }
}

export const route: Functor<RouteUri> & Semigroup<RouteUri> = {
  URI: RouteUri,
  map,
  concat: combineRoutes,
}
