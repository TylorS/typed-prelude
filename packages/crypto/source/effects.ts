import { Effect } from '@typed/effects'
import { Either } from '@typed/either'
import { Future } from '@typed/future'
import { ArgsOf } from '@typed/lambda'
import { CryptoEnv } from './CryptoEnv'
import { getSubtleCrypto } from './getSubtleCrypto'

export const decrypt = createCryptoEffect('decrypt')
export const deriveBits = createCryptoEffect('deriveBits')
export const deriveKey = createCryptoEffect('deriveKey')
export const digest = createCryptoEffect('digest')
export const encrypt = createCryptoEffect('encrypt')
export const exportKey = createCryptoEffect('exportKey') as {
  (format: 'jwk', key: CryptoKey): Effect<CryptoEnv, Either<Error, JsonWebKey>>
  (format: 'raw' | 'pkcs8' | 'spki', key: CryptoKey): Effect<CryptoEnv, Either<Error, ArrayBuffer>>
  (format: string, key: CryptoKey): Effect<CryptoEnv, Either<Error, JsonWebKey | ArrayBuffer>>
}
export const generateKey = createCryptoEffect('generateKey') as {
  (algorithm: string, extractable: boolean, keyUsages: string[]): Effect<
    CryptoEnv,
    Either<Error, CryptoKeyPair | CryptoKey>
  >
  (
    algorithm: RsaHashedKeyGenParams | EcKeyGenParams | DhKeyGenParams,
    extractable: boolean,
    keyUsages: string[],
  ): Effect<CryptoEnv, Either<Error, CryptoKeyPair>>
  (
    algorithm: AesKeyGenParams | HmacKeyGenParams | Pbkdf2Params,
    extractable: boolean,
    keyUsages: string[],
  ): Effect<CryptoEnv, Either<Error, CryptoKey>>
}
export const importKey = createCryptoEffect('importKey') as {
  (
    format: 'raw' | 'pkcs8' | 'spki',
    keyData:
      | Int8Array
      | Int16Array
      | Int32Array
      | Uint8Array
      | Uint16Array
      | Uint32Array
      | Uint8ClampedArray
      | Float32Array
      | Float64Array
      | DataView
      | ArrayBuffer,
    algorithm:
      | string
      | RsaHashedImportParams
      | EcKeyImportParams
      | HmacImportParams
      | DhImportKeyParams
      | AesKeyAlgorithm,
    extractable: boolean,
    keyUsages: string[],
  ): Effect<CryptoEnv, Either<Error, CryptoKey>>
  (
    format: 'jwk',
    keyData: JsonWebKey,
    algorithm:
      | string
      | RsaHashedImportParams
      | EcKeyImportParams
      | HmacImportParams
      | DhImportKeyParams
      | AesKeyAlgorithm,
    extractable: boolean,
    keyUsages: string[],
  ): Effect<CryptoEnv, Either<Error, CryptoKey>>
  (
    format: string,
    keyData:
      | JsonWebKey
      | Int8Array
      | Int16Array
      | Int32Array
      | Uint8Array
      | Uint16Array
      | Uint32Array
      | Uint8ClampedArray
      | Float32Array
      | Float64Array
      | DataView
      | ArrayBuffer,
    algorithm:
      | string
      | RsaHashedImportParams
      | EcKeyImportParams
      | HmacImportParams
      | DhImportKeyParams
      | AesKeyAlgorithm,
    extractable: boolean,
    keyUsages: string[],
  ): Effect<CryptoEnv, Either<Error, CryptoKey>>
}
export const sign = createCryptoEffect('sign')
export const unwrapKey = createCryptoEffect('unwrapKey')
export const verify = createCryptoEffect('verify')
export const wrapKey = createCryptoEffect('wrapKey')

function createCryptoEffect<A extends keyof SubtleCrypto>(key: A) {
  return function*(...args: ArgsOf<SubtleCrypto[A]>): CryptoEffectFrom<A> {
    const subtle = yield* getSubtleCrypto()
    const fn: (...args: any[]) => PromiseLike<any> = (subtle[key] as any).bind(subtle)

    return yield* Effect.fromEnv(Future.fromPromise(fn(...args)))
  }
}

type CryptoEffectFrom<A extends keyof SubtleCrypto> = Effect<
  CryptoEnv,
  Either<Error, PromiseValue<ReturnType<SubtleCrypto[A]>>>
>
type PromiseValue<A> = A extends PromiseLike<infer R> ? R : never
