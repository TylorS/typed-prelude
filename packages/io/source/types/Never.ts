import { PureEffect } from '@typed/effects'
import { id } from '@typed/lambda'
import { toString } from '@typed/strings'
import { decodeFailure } from '../decoder'
import { Type } from './Type'

export type NeverType = Type<never>
export const Never: NeverType = {
  name: 'Never',
  expected: 'never',
  is: (_): _ is never => false,
  decode(i) {
    return decodeFailure({
      message: `Didn't expect a single thing but got ${toString(i)}`,
    }) as PureEffect<never>
  },
  encode: id,
}
