import { Effect } from '@typed/effects'
import { Left } from '@typed/either'
import { toString } from '@typed/strings'
import { Type } from '../Type'

export type NeverType<E> = Type<'Never', E, never>
export const Never: NeverType<unknown> = {
  name: 'Never',
  is: (_): _ is never => false,
  *decode(i) {
    return Left.of([{ message: `Didn't expect a single thing but got ${toString(i)}` }])
  },
  encode: Effect.of,
}
