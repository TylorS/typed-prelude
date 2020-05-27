import { toString } from '@typed/common'
import { fromRight, isRight } from '@typed/either'
import { isFailure, isSuccess, RemoteData } from '@typed/remote-data'
import * as G from '../guard'
import { catchDecodeFailure, decodeFailure, Decoder, TypeOf } from './Decoder'
import { refinement } from './refinement'

const _RemoteData = Decoder.fromGuard(G.RemoteData, `RemoteData<unknown unknown>`)

export { _RemoteData as RemoteData }

export const remoteData = <L extends Decoder, R extends Decoder>(
  l: L,
  r: R,
): Decoder<RemoteData<TypeOf<L>, TypeOf<R>>> => {
  const expected = `RemoteData<${l.expected}, ${r.expected}>`

  return refinement(
    _RemoteData,
    function* (rd) {
      if (isFailure(rd)) {
        const either = yield* catchDecodeFailure(l.decode(rd.value))

        if (isRight(either)) {
          return RemoteData.failure(fromRight(either))
        }

        return yield* decodeFailure({
          message: `Expected ${expected}, but got Failure<${toString(rd.value)}>`,
        })
      }

      if (isSuccess(rd)) {
        const either = yield* catchDecodeFailure(r.decode(rd.value))

        if (isRight(either)) {
          return RemoteData.of(fromRight(either))
        }

        return yield* decodeFailure({
          message: `Expected ${expected}, but got Success<${toString(rd.value)}>`,
        })
      }

      return rd
    },
    expected,
  )
}
