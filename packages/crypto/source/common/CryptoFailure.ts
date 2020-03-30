import { FailEnv } from '@typed/effects'

export const CryptoFailure = Symbol.for('CryptoFailure')

export interface CryptoFailure extends FailEnv<typeof CryptoFailure, Error> {}
