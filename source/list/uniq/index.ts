import { id } from '@typed/lambda'
import { uniqBy } from '../uniqBy'

export const uniq: <A>(list: ReadonlyArray<A>) => A[] = uniqBy(id)
