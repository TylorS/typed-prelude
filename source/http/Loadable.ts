export const LOADING = Symbol('Loading')
export type LOADING = typeof LOADING

export type Loadable<A> = A | LOADING

export const isLoading = <A>(loading: Loadable<A>): loading is LOADING => loading === LOADING
