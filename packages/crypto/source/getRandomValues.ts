import { get } from '@typed/effects'
import { ArgsOf } from '@typed/lambda'
import { CryptoEnv } from './CryptoEnv'

export function* getRandomValues(...args: ArgsOf<Crypto['getRandomValues']>) {
  const { crypto } = yield* get<CryptoEnv>()

  return crypto.getRandomValues(...args)
}
