export interface EncryptedKeyPair extends CryptoKeyPair {
  readonly encrypted: AesEncryptedKeys
}

export interface AesEncryptedKeys {
  readonly publicKey: AesEncryptedData
  readonly privateKey: AesEncryptedData
}

export type AesEncryptedData = readonly [ArrayBuffer, Uint8Array]
