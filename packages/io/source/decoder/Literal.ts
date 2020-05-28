import { ComparableValues } from '@typed/lambda'
import { toString } from '@typed/strings'
import * as G from '../guard'
import { Decoder } from './Decoder'

export function literal<A extends ReadonlyArray<ComparableValues>>(
  ...values: A
): Decoder<A[number]> {
  return Decoder.fromGuard(G.literal(...values), values.map(toString).join(' | '))
}
