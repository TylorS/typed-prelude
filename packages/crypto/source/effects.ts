import { Effect } from '@typed/effects'
import { Either } from '@typed/either'
import { Future } from '@typed/future'
import { ArgsOf } from '@typed/lambda/source'
import { CryptoEnv } from './CryptoEnv'
import { getSubtleCrypto } from './getSubtleCrypto'

export const decrypt = createCryptoEffect('decrypt')
export const deriveBits = createCryptoEffect('deriveBits')
export const deriveKey = createCryptoEffect('deriveKey')
export const digest = createCryptoEffect('digest')
export const encrypt = createCryptoEffect('encrypt')
export const exportKey = createCryptoEffect('exportKey')
export const generateKey = createCryptoEffect('generateKey')
export const importKey = createCryptoEffect('importKey')
export const sign = createCryptoEffect('sign')
export const unwrapKey = createCryptoEffect('unwrapKey')
export const verify = createCryptoEffect('verify')
export const wrapKey = createCryptoEffect('wrapKey')

function createCryptoEffect<A extends keyof SubtleCrypto>(key: A) {
  return function*(...args: ArgsOf<SubtleCrypto[A]>): CryptoEffectFrom<A> {
    const subtle = yield* getSubtleCrypto()
    const fn: (...args: any[]) => PromiseLike<any> = subtle[key]

    return yield* Effect.fromEnv(Future.fromPromise(fn(...args)))
  }
}

type CryptoEffectFrom<A extends keyof SubtleCrypto> = Effect<
  CryptoEnv,
  Either<Error, PromiseValue<ReturnType<SubtleCrypto[A]>>>
>
type PromiseValue<A> = A extends PromiseLike<infer R> ? R : never
