import { Effect } from '@typed/effects'
import { Either, fromRight, isLeft } from '@typed/either'
import { ENCRYPT_AND_DECRYPT, RSA_PARAMS } from './constants'
import { CryptoEnv } from './CryptoEnv'
import { generateKey } from './effects'
import { exportKeyPair } from './exportKeyPair'
import { ExportedKeyPair } from './types'

/**
 * Generates an exported key pair. WARNING :: be very careful about what you do with this KeyPair. We highly
 * recommend encrypting them with another CryptoKey that never leaves memory and can be derived by user-supplied info.
 */
export function* generateRsaExportedKeys(): Effect<CryptoEnv, Either<Error, ExportedKeyPair>> {
  // Generate a one-off extractable RSA key pair to allow exporting for encryption
  const errorOrKeyPair = yield* generateKey(RSA_PARAMS, true, ENCRYPT_AND_DECRYPT)

  if (isLeft(errorOrKeyPair)) {
    return errorOrKeyPair
  }

  return yield* exportKeyPair(fromRight(errorOrKeyPair))
}
