export * from './history'
export * from './http'
export * from './lambda'
export * from './list'
export * from './logic'
export * from './math'
export * from './objects'
export * from './routing'
export * from './storage'
export * from './strings'
export * from './uuid'

import * as MaybeModule from './maybe'

export type Maybe<A> = MaybeModule.Maybe<A>
export const Nothing = MaybeModule.Nothing
export type Nothing = MaybeModule.Nothing
export type Just<A> = MaybeModule.Just<A>
export const fromJust = MaybeModule.fromJust
export const withDefault = MaybeModule.withDefault
export const isJust = MaybeModule.isJust
export const isNothing = MaybeModule.isNothing

export namespace Maybe {
  export const of = MaybeModule.Maybe.of
  export const ap = MaybeModule.ap
  export const chain = MaybeModule.chain
  export const combine = MaybeModule.combine
  export const combineArray = MaybeModule.combineArray
  export const just = MaybeModule.Just.of
  export const map = MaybeModule.map
  export const race = MaybeModule.race
}

import * as EitherModule from './either'

export type Either<A, B> = EitherModule.Either<A, B>
export type Left<A> = EitherModule.Left<A>
export type Right<A> = EitherModule.Right<A>
export const tryCatch = EitherModule.tryCatch

export namespace Either {
  export const of = EitherModule.Either.of
  export const left = EitherModule.Either.left
  export const ap = EitherModule.ap
  export const chain = EitherModule.chain
  export const chainLeft = EitherModule.chainLeft
  export const map = EitherModule.map
  export const mapLeft = EitherModule.mapLeft
  export const swap = EitherModule.swap
  export const unpack = EitherModule.unpack
}

import * as TupleModule from './tuple'
export { Tuple, First, Second, first, second } from './tuple'

export namespace Tuple {
  export const swap = TupleModule.swap
  export const chain = TupleModule.chain
  export const chainLeft = TupleModule.chainLeft
  export const map = TupleModule.map
  export const mapLeft = TupleModule.mapLeft
  export const ap = TupleModule.ap
  export const apLeft = TupleModule.apLeft
}

import * as EffectModule from './effect'
export { runEffect, defaultResources, runPure, handle, Pure } from './effect'

export type Effect<A, B extends {} = {}> = EffectModule.Effect<A, B>

export namespace Effect {
  export const create = EffectModule.Effect.create
  export const of = EffectModule.Effect.of
  export const fromIO = EffectModule.Effect.fromIO
  export const chain = EffectModule.chain
  export const map = EffectModule.chain
  export const ap = EffectModule.ap
}

import * as FutureModule from './future'
export { fork, toPromise } from './future'

export type Future<A, B> = FutureModule.Future<A, B>

export namespace Future {
  export const create = FutureModule.Future.create
  export const of = FutureModule.Future.of
  export const reject = FutureModule.Future.reject
  export const chain = FutureModule.chain
  export const chainLeft = FutureModule.chainLeft
  export const map = FutureModule.map
  export const mapLeft = FutureModule.mapLeft
  export const ap = FutureModule.ap
}
