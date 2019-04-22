import { id } from '@typed/lambda'
import { uniqBy } from '../uniqBy'

/**
 * Get unique set of values contained in list.
 */
export const uniq: <A>(list: ReadonlyArray<A>) => A[] = uniqBy(id)
