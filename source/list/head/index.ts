import { Maybe } from '../../maybe'

export const head = <A>(list: ArrayLike<A>) => Maybe.of(list[0])
