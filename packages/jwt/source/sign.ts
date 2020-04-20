import { JsonObject } from '@typed/common'
import {
  arrayBufferToString,
  CryptoEnv,
  CryptoFailure,
  ECDSA_PARAMS,
  signWithEcdsaKeyPair,
  stringToArrayBuffer,
} from '@typed/crypto'
import { Effects } from '@typed/effects'
import { base64UrlEncode } from './base64UrlEncode'
import { Jwt } from './Jwt'

const header = encodeJson({
  alg: ECDSA_PARAMS.name,
  typ: 'JWT',
})

export function* sign(
  claims: JsonObject,
  privateKey: CryptoKey,
): Effects<CryptoEnv & CryptoFailure, Jwt> {
  const token = `${header}.${encodeJson(claims)}`
  const tokenBuffer = stringToArrayBuffer(token)
  const signatureBuffer = yield* signWithEcdsaKeyPair(tokenBuffer, privateKey)
  const signatureDecoded = arrayBufferToString(signatureBuffer)
  const signature = base64UrlEncode(signatureDecoded)
  const jwt = `${token}.${signature}` as Jwt

  return jwt
}

function encodeJson(x: JsonObject) {
  return base64UrlEncode(JSON.stringify(x))
}
