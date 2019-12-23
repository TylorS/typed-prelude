import { Pure } from '@typed/env'
import { Future } from '@typed/future'
import { Maybe } from '@typed/maybe'

// Basic Asynchronous key:value storage interface
export interface AsyncStorage<A> {
  readonly getItems: ItemsEffect<A>
  readonly getItem: (key: string) => ItemEffect<Maybe<A>>
  readonly setItem: (key: string, value: A) => ItemEffect<A>
  readonly removeItem: (key: string) => ItemEffect<Maybe<A>>
  readonly clear: Pure<boolean>
}

export type ItemEffect<A> = Future<never, Error, A>
export type ItemsEffect<A> = Future<never, Error, readonly A[]>
