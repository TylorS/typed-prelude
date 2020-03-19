import { LazyDisposable } from '@typed/disposable'

export interface Fiber<A> extends LazyDisposable {
  info: FiberInfo<A> // Intended to be mutable
}

export const enum FiberState {
  Running,
  Returned,
  Error,
}

export type FiberInfo<B> =
  | {
      readonly state: FiberState.Running
      readonly promise: Promise<B> // Rejects with Error
    }
  | { readonly state: FiberState.Error; readonly error: Error }
  | { readonly state: FiberState.Returned; readonly value: B }
