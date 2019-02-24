import { Arity1 } from '@typed/lambda'
import { isJust, Just, Maybe } from '@typed/maybe'
import { unwrap } from '@typed/maybe'

export type Loadable<A> = LoadingState | ErrorState | Maybe<A>

export const LOADING = Symbol('Loading')
export type LOADING = typeof LOADING
export type LoadingState = { [LOADING]: true }

export const Loading: LoadingState = { [LOADING]: true }

export const ERROR = Symbol('Error')
export type ERROR = typeof ERROR
export type ErrorState = { readonly [ERROR]: Error }

export namespace Loadable {
  export const of = <A>(value: A): Loadable<A> => Maybe.of(value)
  export const error = <A = unknown>(error: Error): Loadable<A> => ({ [ERROR]: error })
  export const loading = <A = unknown>(): Loadable<A> => Loading
}

export const isLoading = <A>(loadable: Loadable<A>): loadable is LoadingState =>
  (loadable as LoadingState)[LOADING] === true

export const isDoneLoading = isJust as <A>(loadable: Loadable<A>) => loadable is Just<A>

export const unwrapLoadable = <A, B>(loadable: Loadable<A>, fn: Arity1<A, B>): B | null =>
  isDoneLoading(loadable) ? unwrap(fn, loadable) : null
