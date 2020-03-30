import { Disposable } from '@typed/disposable'
import { Effect, orFail } from '@typed/effects'
import { Future } from '@typed/future'
import { ArgsOf } from '@typed/lambda'
import { debug, time } from '@typed/logger'
import { CryptoEffects, CryptoFailure } from '../common'
import { getSubtleCrypto } from './getSubtleCrypto'

export const decrypt = createCryptoEffect('decrypt')
export const deriveBits = createCryptoEffect('deriveBits')
export const deriveKey = createCryptoEffect('deriveKey')
export const digest = createCryptoEffect('digest')
export const encrypt = createCryptoEffect('encrypt')
export const exportKey = createCryptoEffect('exportKey') as {
  (format: 'jwk', key: CryptoKey): CryptoEffects<unknown, JsonWebKey>
  (format: 'raw' | 'pkcs8' | 'spki', key: CryptoKey): CryptoEffects<unknown, ArrayBuffer>
  (format: string, key: CryptoKey): CryptoEffects<unknown, ArrayBuffer | JsonWebKey>
}
export const generateKey = createCryptoEffect('generateKey') as {
  (algorithm: string, extractable: boolean, keyUsages: string[]): CryptoEffects<
    unknown,
    CryptoKey | CryptoKeyPair
  >
  (
    algorithm: RsaHashedKeyGenParams | EcKeyGenParams | DhKeyGenParams,
    extractable: boolean,
    keyUsages: string[],
  ): CryptoEffects<unknown, CryptoKeyPair>
  (
    algorithm: AesKeyGenParams | HmacKeyGenParams | Pbkdf2Params,
    extractable: boolean,
    keyUsages: string[],
  ): CryptoEffects<unknown, CryptoKey>
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
  ): CryptoEffects<unknown, CryptoKey>
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
  ): CryptoEffects<unknown, CryptoKey>
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
  ): CryptoEffects<unknown, CryptoKey>
}
export const sign = createCryptoEffect('sign')
export const unwrapKey = createCryptoEffect('unwrapKey')
export const verify = createCryptoEffect('verify')
export const wrapKey = createCryptoEffect('wrapKey')

function createCryptoEffect<A extends keyof SubtleCrypto>(key: A) {
  let id = 0

  return function*(...args: ArgsOf<SubtleCrypto[A]>): CryptoEffectFrom<A> {
    const label = `Crypto.subtle.${key}${id++}`
    const subtle = yield* getSubtleCrypto()
    const fn: (...args: any[]) => PromiseLike<any> = (subtle[key] as any).bind(subtle)

    yield* debug(`Running ${label}...`)
    const end = yield* time(label)
    const value = yield* orFail(CryptoFailure, Effect.fromEnv(fromPromise(fn(...args))))
    yield* end

    return value
  }
}

export const fromPromise = <A>(promise: PromiseLike<A>) =>
  Future.create<unknown, Error, A>((reject, resolve) => {
    const disposable = Disposable.lazy()

    promise.then(
      a => disposable.addDisposable(resolve(a)),
      e => disposable.addDisposable(reject(e)),
    )

    return disposable
  })

type CryptoEffectFrom<A extends keyof SubtleCrypto> = CryptoEffects<
  unknown,
  PromiseValue<ReturnType<SubtleCrypto[A]>>
>
type PromiseValue<A> = A extends PromiseLike<infer R> ? R : never
