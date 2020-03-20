import { Compact } from '@typed/common'
import { LazyDisposable } from '@typed/disposable'
import { Capabilities } from '../Effect'
import { Fail } from '../failures'

export interface Fiber<A> extends LazyDisposable {
  info: FiberInfo<A> // Intended to be mutable
}

export const FiberFailure = Symbol.for('FiberFailure')
export type FiberFailure = { readonly [K in typeof FiberFailure]: Fail<Error> }

export type FiberCapabilites<A> = Compact<Capabilities<A> & FiberFailure>

export const enum FiberState {
  Running,
  Returned,
  Error,
}

export type FiberInfo<B> =
  | {
      readonly state: FiberState.Running
      // A promise is used because it will keep track of the value and supply the resolved/rejected value to late subscribers
      readonly promise: Promise<B> // Rejects with Error
    }
  | { readonly state: FiberState.Error; readonly error: Error }
  | { readonly state: FiberState.Returned; readonly value: B }
