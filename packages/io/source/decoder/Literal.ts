import { toString } from '@typed/common'
import { ComparableValues } from '@typed/lambda'
import * as G from '../guard'
import { Decoder } from './Decoder'

export function literal<A extends ReadonlyArray<ComparableValues>>(
  ...values: A
): Decoder<A[number]> {
  return Decoder.fromGuard(G.literal(...values), values.map(toString).join(' | '))
}
