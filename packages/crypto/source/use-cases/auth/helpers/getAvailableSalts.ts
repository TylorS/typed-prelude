import { get } from '@typed/effects'
import { map, uniq } from '@typed/list'
import { EncryptionEffects, EncryptionEnv } from '../../../common'
import { KEY_SEPARATOR } from './constants'
import { orCryptoFailure } from './orCryptoFailure'

export function* getAvailableSalts(): EncryptionEffects<unknown, ReadonlyArray<string>> {
  const { aesEncryptedKeyStorage } = yield* get<EncryptionEnv>()
  const allKeys = yield* orCryptoFailure(aesEncryptedKeyStorage.getKeys())

  return uniq(map(key => key.split(KEY_SEPARATOR)[0], allKeys))
}
