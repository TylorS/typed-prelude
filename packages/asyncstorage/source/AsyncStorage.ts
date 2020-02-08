import { Disposable } from '@typed/disposable'
import { Effects } from '@typed/effects'
import { Either } from '@typed/either'
import { Maybe } from '@typed/maybe'

// Basic Asynchronous key:value storage interface
export interface AsyncStorage<A> extends Disposable {
  readonly getKeys: () => ItemsEffect<string>
  readonly getItems: () => ItemsEffect<A>
  readonly getItem: (key: string) => ItemEffect<Maybe<A>>
  readonly setItem: (key: string, value: A) => ItemEffect<A>
  readonly removeItem: (key: string) => ItemEffect<Maybe<A>>
  readonly clear: () => Effects<never, boolean>
}

export type ItemEffect<A> = Effects<never, Either<Error, A>>
export type ItemsEffect<A> = Effects<never, Either<Error, readonly A[]>>
