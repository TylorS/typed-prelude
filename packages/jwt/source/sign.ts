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
  const signature = base64UrlEncode(
    arrayBufferToString(yield* signWithEcdsaKeyPair(stringToArrayBuffer(token), privateKey)),
  )
  const jwt = `${token}.${signature}`

  return jwt as Jwt
}

function encodeJson(x: JsonObject) {
  return base64UrlEncode(JSON.stringify(x))
}
