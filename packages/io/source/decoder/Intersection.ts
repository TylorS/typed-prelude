import { Flatten, UnNest } from '@typed/common'
import { combine } from '@typed/effects'
import { Decoder, TypeOf } from './Decoder'
import { Record } from './Record'
import { refinement } from './refinement'

export const intersection = <A extends ReadonlyArray<Decoder<any>>>(
  decoders: A,
): Decoder<IntersectionType<A>> =>
  refinement(
    Record,
    function* (r) {
      const decoded = yield* combine(...decoders.map((d) => d.decode(r)))

      return decoded.reduce((acc, x) => ({ ...acc, ...x }), {})
    },
    decoders.map((d) => d.expected).join(' & '),
  )

type IntersectionType<A extends readonly any[]> = UnNest<Flatten<ToDecoderTypeConsList<A>, unknown>>

type ToDecoderTypeConsList<A extends readonly any[]> = [] extends A
  ? unknown
  : ((...a: A) => any) extends (t: infer T, ...ts: infer TS) => any
  ? [TypeOf<T>, ToDecoderTypeConsList<TS>]
  : unknown
