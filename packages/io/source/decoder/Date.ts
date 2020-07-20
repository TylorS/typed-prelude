import * as G from '../guard'
import { DecodeError, decodeFailure, Decoder } from './Decoder'
import { refinement } from './refinement'
import { String } from './String'

export const Date: Decoder<unknown, Date> = Decoder.fromGuard(G.Date, `Date`)
export const DateFromIsoString: Decoder<unknown, Date> = refinement(
  String,
  function* (s) {
    try {
      const d = new globalThis.Date(s)

      if (Number.isNaN(d.getTime())) {
        throw new Error(`Incompatible date string`)
      }

      return d
    } catch {
      return yield* decodeFailure(DecodeError.create(`'new Date(dateString)' compatible string`, s))
    }
  },
  'DateFromIsoString',
)
