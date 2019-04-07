import { always } from '@typed/lambda'
import { Env } from './Env'
import { map } from './map'

export const mapTo = <E, A, B>(value: B, env: Env<E, A>): Env<E, B> => map(always(value), env)
