const secretOptions = {
  name: 'HMAC',
  hash: { name: 'SHA-256' },
}
const importOptions = ['sign']

export function importSecretKey(secret: string, crypto: Crypto) {
  return crypto.subtle.importKey(
    'jwk',
    {
      kty: 'oct',
      k: secret,
      alg: 'HS256',
      ext: true,
    },
    secretOptions,
    false,
    importOptions,
  )
}
