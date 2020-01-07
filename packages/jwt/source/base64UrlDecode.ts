import { pipe } from '@typed/lambda'
import { base64Decode } from './base64'

export const base64UrlDecode: (encoded: string) => string = pipe(
  padString,
  replaceTokens,
  base64Decode,
)

const REPLACE_TOKENS = [[/\-/g, '+'] as const, [/_/g, '/'] as const]

function replaceTokens(message: string): string {
  return REPLACE_TOKENS.reduce((msg, [r, v]) => msg.replace(r, v), message)
}

function padString(input: string): string {
  const pad = input.length % 4

  if (pad === 1) {
    throw new Error(
      'InvalidLengthError: Input base64Url string is the wrong length to determine padding',
    )
  }

  if (pad) {
    return input + new Array(5 - pad).join('=')
  }

  return input
}
