import { AsyncStorage } from '@typed/asyncstorage'
import { CryptoEnv } from './CryptoEnv'
import { CryptoFailure } from './CryptoFailure'
import { AesEncryptedData } from './types'

export type EncryptionEnv = CryptoEnv & CryptoFailure & AesKeyStorage

export interface AesKeyStorage {
  readonly aesEncryptedKeyStorage: AsyncStorage<AesEncryptedData> // Where the RSA keys are stored
  // The keys used to place into storage
  readonly aesStorageKeys: {
    readonly publicKey: string
    readonly privateKey: string
  }
}
