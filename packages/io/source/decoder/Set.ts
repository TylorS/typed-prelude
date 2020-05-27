import * as G from '../guard'
import { array } from './Array'
import { Decoder, TypeOf } from './Decoder'
import { refinement } from './refinement'

const _Set = Decoder.fromGuard(G.Set, `ReadonlySet<unknown>`)

export { _Set as Set }

export const set = <A extends Decoder>(d: A): Decoder<ReadonlySet<TypeOf<A>>> => {
  const arrayDecoder = array(d)

  return refinement(
    _Set,
    function* (s) {
      return new Set(yield* arrayDecoder.decode(Array.from(s.values())))
    },
    `ReadonlySet<${d.expected}>`,
  )
}
