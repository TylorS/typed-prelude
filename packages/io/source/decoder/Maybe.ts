import { fromRight, isRight } from '@typed/either'
import { fromJust, isNothing, Just, Maybe } from '@typed/maybe'
import { toString } from '@typed/strings'
import * as G from '../guard'
import { catchDecodeFailure, DecodeError, decodeFailure, Decoder, TypeOf } from './Decoder'
import { refinement } from './refinement'

const _Maybe = Decoder.fromGuard(G.Maybe, 'Maybe<unknown>')

export { _Maybe as Maybe }

export const maybe = <A extends Decoder>(a: A): Decoder<Maybe<TypeOf<A>>> =>
  refinement(
    _Maybe,
    function* (maybe) {
      if (isNothing(maybe)) {
        return maybe
      }

      const u = fromJust(maybe)
      const t = yield* catchDecodeFailure(a.decode(u))

      if (isRight(t)) {
        return Just.of(fromRight(t))
      }

      return yield* decodeFailure(DecodeError.create(`Maybe<${a.expected}>`, toString(u)))
    },
    `Maybe<${a.expected}>`,
  )
