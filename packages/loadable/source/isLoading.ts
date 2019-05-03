import { Loadable, Loading, LOADING } from './Loadable'

/**
 * Returns to if still loading
 * @param loadable :: Loadable a
 * @returns :: boolean
 */
export const isLoading = <A>(loadable: Loadable<A>): loadable is Loading => {
  return loadable[LOADING] === true
}
