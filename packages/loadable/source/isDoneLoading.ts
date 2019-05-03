import { Loadable, Loaded, LOADING } from './Loadable'

/**
 * Returns true is Loadable has finished loading.
 * @param loadable :: Loadable a
 * @returns :: boolean
 */
export function isDoneLoading<A>(loadable: Loadable<A>): loadable is Loaded<A> {
  return loadable[LOADING] === false
}
