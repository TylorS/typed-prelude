import { Effects, orFail } from '@typed/effects'
import { Either } from '@typed/either'
import { CryptoFailure } from '../../../common'

export const orCryptoFailure = <E, A>(
  effect: Effects<E, Either<Error, A>>,
): Effects<E & CryptoFailure, A> => orFail(CryptoFailure, effect)
