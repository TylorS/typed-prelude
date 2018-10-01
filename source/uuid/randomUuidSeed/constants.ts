export const VALID_UUID_LENGTH: 16 = 16

export const isBrowser: boolean = typeof crypto !== 'undefined' || typeof msCrypto !== 'undefined'

declare global {
  // Adds support for IE 11.
  export const msCrypto: Crypto
}
