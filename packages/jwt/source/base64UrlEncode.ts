import { pipe } from '@typed/lambda'
import { base64Encode } from './base64'

export const base64UrlEncode = pipe(base64Encode, encodeTokens)

const REPLACE_TOKENS = [[/=+$/, ''] as const, [/\+/g, '-'] as const, [/\//g, '_'] as const]

export function encodeTokens(message: string): string {
  return REPLACE_TOKENS.reduce((msg, [r, v]) => msg.replace(r, v), message)
}
