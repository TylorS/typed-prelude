import { AsyncStorage } from '@typed/asyncstorage'
import { CryptoEnv } from './CryptoEnv'
import { CryptoFailure } from './CryptoFailure'
import { AesEncryptedData } from './types'

export type EncryptionEnv = CryptoEnv &
  CryptoFailure & {
    readonly aesEncryptedKeyStorage: AesEncryptedKeyStorage // Where the RSA keys are stored
    readonly aesStorageKeys: { readonly publicKey: string; readonly privateKey: string } // The keys used to place into storage
  }

export type AesEncryptedKeyStorage = AsyncStorage<AesEncryptedData>
