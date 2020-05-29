import { id } from '@typed/lambda'
import { toString } from '@typed/strings'
import { DecodeEffect, DecodeError, decodeFailure } from '../decoder'
import { Type } from './Type'

export type NeverType = Type<never>
export const Never: NeverType = {
  name: 'Never',
  expected: 'never',
  is: (_): _ is never => false,
  decode(i) {
    return decodeFailure(DecodeError.create(`not a damn thing`, toString(i))) as DecodeEffect<never>
  },
  encode: id,
}
