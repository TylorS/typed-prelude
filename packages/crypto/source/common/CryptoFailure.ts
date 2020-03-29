import { FailEnv } from '@typed/effects'

export const CryptoFailure = Symbol.for('CryptoFailure')
export type CryptoFailure = FailEnv<typeof CryptoFailure, Error>
