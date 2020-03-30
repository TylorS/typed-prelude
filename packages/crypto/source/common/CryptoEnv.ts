import { LoggerEnv } from '@typed/logger'

export interface CryptoEnv extends LoggerEnv {
  readonly crypto: Crypto
}
