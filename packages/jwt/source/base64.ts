import { isBrowser } from '@typed/common'
import { decode, encode } from './browser-base64'

const NODE_MESSAGE_ENCODING = 'utf8'
const NODE_BASE64_ENCODING = 'base64'

// Node + Browser support for base64 encoding a string
export function base64Encode(message: string): string {
  if (isBrowser) {
    return encode(message)
  }

  return Buffer.from(message, NODE_MESSAGE_ENCODING).toString(NODE_BASE64_ENCODING)
}

export function base64Decode(message: string): string {
  if (isBrowser) {
    return decode(message)
  }

  return Buffer.from(message, NODE_BASE64_ENCODING).toString(NODE_MESSAGE_ENCODING)
}
