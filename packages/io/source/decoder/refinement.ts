import { DecodeEffect, Decoder, TypeOf } from './Decoder'

export const refinement = <A extends Decoder<any>, B extends TypeOf<A>>(
  decoder: A,
  refined: (value: TypeOf<A>) => DecodeEffect<B>,
  expected: string = `UnknownRefinement<${decoder.expected}>`,
): Decoder<B> => ({
  expected,
  *decode(i) {
    return yield* refined(yield* decoder.decode(i))
  },
})
