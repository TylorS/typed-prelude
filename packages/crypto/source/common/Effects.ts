import { Effects } from '@typed/effects'
import { CryptoEnv } from './CryptoEnv'
import { CryptoFailure } from './CryptoFailure'
import { EncryptionEnv } from './EncryptionEnv'

export type CryptoEffects<E, A> = Effects<CryptoEnv & CryptoFailure & E, A>
export type EncryptionEffects<E, A> = Effects<EncryptionEnv & E, A>
