import { Maybe } from '@typed/maybe'

export const head = <A>(list: ArrayLike<A>) => Maybe.of(list[0])
