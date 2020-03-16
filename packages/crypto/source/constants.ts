export const HASH = 'SHA-256'
export const DEFAULT_ITERATIONS = 2000
export const EXTRACTABLE = false
export const ENCRYPT_AND_DECRYPT = ['encrypt', 'decrypt']
export const AES_ALGORITHM = 'AES-GCM'
export const AES_IV_SIZE = 12
export const RSA_PARAMS: RsaHashedKeyGenParams = {
  name: 'RSA-OAEP',
  modulusLength: 2048, // can be 1024, 2048, or 4096
  publicExponent: new Uint8Array([0x01, 0x00, 0x01]),
  hash: HASH,
}
