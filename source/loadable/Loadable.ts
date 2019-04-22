export const LOADING = '@typed/Loading' as const
export type LOADING = typeof LOADING

/**
 * Used to represent a loading value
 */
export type Loading = { readonly [LOADING]: true }
export const Loading: Loading = { [LOADING]: true }

export type Loaded<A> = { readonly [LOADING]: false; readonly loaded: A }

/**
 * Generic type to wrap values that can be loaded.
 */
export type Loadable<A> = Loading | Loaded<A>

export namespace Loadable {
  export const of = <A>(value: A): Loadable<A> => ({ [LOADING]: false, loaded: value })
}
