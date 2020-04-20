export const HASH = 'SHA-256'
export const DEFAULT_ITERATIONS = 2000
export const EXTRACTABLE = false
export const ENCRYPT_AND_DECRYPT = ['encrypt', 'decrypt']
export const PUBLIC_EXPONENT = new Uint8Array([0x01, 0x00, 0x01])
export const MODULUS_LENGTH = 2048
export const AES_ALGORITHM = 'AES-GCM'
export const AES_IV_SIZE = 12
export const RSA_PARAMS: RsaHashedKeyGenParams = {
  name: 'RSA-OAEP',
  modulusLength: MODULUS_LENGTH,
  publicExponent: PUBLIC_EXPONENT,
  hash: HASH,
}
export const SIGN_AND_VERIFY = ['sign', 'verify']

export const ECDSA_KEY_PARAMS: EcKeyGenParams = {
  name: 'ECDSA',
  namedCurve: 'P-256',
}

export const ECDSA_PARAMS: EcdsaParams = { name: 'ECDSA', hash: HASH }
