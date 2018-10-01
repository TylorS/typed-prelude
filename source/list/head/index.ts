import { Maybe } from '../../maybe'

export const head = <A>(list: A[]) => Maybe.of(list[0])
