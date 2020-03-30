export interface EncryptedKeyPair extends CryptoKeyPair {
  readonly encrypted: AesEncryptedKeys
}

export interface AesEncryptedKeys {
  readonly publicKey: AesEncryptedData
  readonly privateKey: AesEncryptedData
}

// Pair of encrypted data w/ the IV used to generate it
export type AesEncryptedData = readonly [ArrayBuffer, Uint8Array]

export type ExportedKeyPair = {
  readonly publicKey: ArrayBuffer
  readonly privateKey: ArrayBuffer
}

export type JsonWebKeyPair = {
  readonly publicKey: JsonWebKey
  readonly privateKey: JsonWebKey
}
