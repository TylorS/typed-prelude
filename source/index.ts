export * from './lambda'
export * from './disposable'
export * from './new-type'
export * from './strings'
export * from './timer'
export * from './list'

import * as SubscriptionModule from './subscription'

export { Subscription, Subscriber, createSubscription, once } from './subscription'

export namespace Subscription {
  export const map = SubscriptionModule.map
}

import * as TupleModule from './tuple'

export namespace Tuple {
  export const chain = TupleModule.chain
  export const chainLeft = TupleModule.chainLeft
  export const map = TupleModule.map
  export const mapLeft = TupleModule.mapLeft
  export const ap = TupleModule.ap
  export const apLeft = TupleModule.apLeft
  export const swap = TupleModule.swap
}
export { Tuple, first, second, First, Second } from './tuple'

import * as EitherModule from './either'
export type Either<A, B> = EitherModule.Either<A, B>
export namespace Either {
  export const of = EitherModule.Either.of
  export const left = EitherModule.Either.left

  export const chain = EitherModule.chain
  export const chainLeft = EitherModule.chainLeft
  export const map = EitherModule.map
  export const mapLeft = EitherModule.mapLeft
  export const ap = EitherModule.ap
  export const swap = EitherModule.swap
  export const unpack = EitherModule.unpack
}
export { fromLeft, fromRight, isLeft, isRight, Left, Right, tryCatch } from './either'

import * as MaybeModule from './maybe'

export type Maybe<A> = MaybeModule.Maybe<A>
export namespace Maybe {
  export const of = MaybeModule.Maybe.of
  export const chain = MaybeModule.chain
  export const map = MaybeModule.map
  export const ap = MaybeModule.ap
  export const combine = MaybeModule.combine
  export const combineArray = MaybeModule.combineArray
  export const race = MaybeModule.race
  export const unwrap = MaybeModule.unwrap
}
export { isJust, fromJust, isNothing, Nothing, withDefault } from './maybe'

import * as EnvModule from './env'

export type Env<E, A> = EnvModule.Env<E, A>
export namespace Env {
  export const of = EnvModule.Env.of
  export const fromIO = EnvModule.Env.fromIO
  export const create = EnvModule.Env.create

  export const chain = EnvModule.chain
  export const map = EnvModule.map
  export const mapTo = EnvModule.mapTo
  export const ap = EnvModule.ap
  export const combineArray = EnvModule.combineArray
}
export { Pure, handle, isEnv, repeat, runPure, withEnv } from './env'

import * as LoadableModule from './loadable'

export type Loadable<A> = LoadableModule.Loadable<A>

export namespace Loadable {
  export const of = LoadableModule.Loadable.of
  export const chain = LoadableModule.chain
  export const map = LoadableModule.map
  export const ap = LoadableModule.ap
  export const unwrap = LoadableModule.unwrap
}
export { Loading, Loaded, isLoading, isDoneLoading } from './loadable'

import * as PromiseModule from './promises'

namespace PromiseNamespace {
  export const resolve = Promise.resolve
  export const reject = Promise.reject
  export const race = Promise.race
  export const all = Promise.all
  export const delay = PromiseModule.delay

  export const chain = PromiseModule.chain
  export const map = PromiseModule.map
  export const ap = PromiseModule.ap
}

export { PromiseNamespace as Promise }
export { createDeferred } from './promises'

export * from './history'
export * from './http'
export * from './logger'
export * from './logic'
export * from './math'
export * from './routing'
export * from './storage'
export * from './uuid'

// Must go last to ensure hasOwnProperty does not break commonjs exports
export * from './objects'
