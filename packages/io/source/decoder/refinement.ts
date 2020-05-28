import { fromRight, isRight } from '@typed/either'
import { toString } from '@typed/strings'
import {
  catchDecodeFailure,
  DecodeEffect,
  DecodeError,
  decodeFailure,
  Decoder,
  TypeOf,
} from './Decoder'

export const refinement = <A extends Decoder<any>, B extends TypeOf<A>>(
  decoder: A,
  refined: (value: TypeOf<A>) => DecodeEffect<B>,
  expected: string,
): Decoder<B> => ({
  expected,
  *decode(i) {
    const eitherErrorOrA = yield* catchDecodeFailure(decoder.decode(i))

    if (isRight(eitherErrorOrA)) {
      return yield* refined(fromRight(eitherErrorOrA))
    }

    return yield* decodeFailure(DecodeError.create(expected, toString(i)))
  },
})
