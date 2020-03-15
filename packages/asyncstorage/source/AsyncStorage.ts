import { Disposable } from '@typed/disposable'
import { PureEffect } from '@typed/effects'
import { Either } from '@typed/either'
import { Maybe } from '@typed/maybe'

// Basic Asynchronous key:value storage interface
export interface AsyncStorage<A> extends Disposable {
  readonly getKeys: () => ItemsEffect<string>
  readonly getItems: () => ItemsEffect<A>
  readonly getItem: (key: string) => ItemEffect<Maybe<A>>
  readonly setItem: (key: string, value: A) => ItemEffect<A>
  readonly removeItem: (key: string) => ItemEffect<Maybe<A>>
  readonly clear: () => ItemEffect<boolean>
}

export type ItemEffect<A> = PureEffect<Either<Error, A>>
export type ItemsEffect<A> = PureEffect<Either<Error, readonly A[]>>
