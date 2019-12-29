import { isBrowser, mapArrayLike } from '@typed/common'
import { base64UrlEncode, encodeTokens } from './base64UrlEncode'
import { importSecretKey } from './importSecretKey'

export async function hmacSha256(
  message: string,
  secret: string,
  crypto?: Crypto,
): Promise<string> {
  return isBrowser || crypto
    ? hmacSha256Browser(message, secret, crypto)
    : hmacSha256Node(message, secret as string)
}

async function hmacSha256Browser(message: string, secret: string, crypto?: Crypto) {
  const secretKey = await importSecretKey(secret, crypto || window.crypto)
  const arrayBuffer = await (crypto || window.crypto).subtle.sign(
    'HMAC',
    secretKey,
    new TextEncoder().encode(message),
  )

  return base64UrlEncode(bufferToString(arrayBuffer))
}

function bufferToString(buffer: ArrayBuffer) {
  return mapArrayLike(x => ('00' + x.toString(16)).slice(-2), new Uint8Array(buffer)).join('')
}

function hmacSha256Node(message: string, secret: string) {
  const crypto: typeof import('crypto') = require('crypto')
  const hmac = crypto
    .createHmac('sha256', secret)
    .update(message)
    .digest('base64')

  return encodeTokens(hmac)
}
