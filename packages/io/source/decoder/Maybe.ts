import { toString } from '@typed/common'
import { fromRight, isRight } from '@typed/either'
import { fromJust, isNothing, Just, Maybe } from '@typed/maybe'
import * as G from '../guard'
import { catchDecodeFailure, decodeFailure, Decoder, TypeOf } from './Decoder'
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

      return yield* decodeFailure({
        message: `Expected Maybe<${a.expected}>, but got Just<${toString(u)}>`,
      })
    },
    `Maybe<${a.expected}>`,
  )
