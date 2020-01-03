import { isBrowser } from '@typed/common'

const NODE_MESSAGE_ENCODING = 'utf8'
const NODE_BASE64_ENCODING = 'base64'

// Node + Browser support for base64 encoding a string

export function base64Encode(message: string): string {
  return isBrowser
    ? btoa(message)
    : Buffer.from(message, NODE_MESSAGE_ENCODING).toString(NODE_BASE64_ENCODING)
}

export function base64Decode(message: string): string {
  return isBrowser
    ? atob(message)
    : Buffer.from(message, NODE_BASE64_ENCODING).toString(NODE_MESSAGE_ENCODING)
}
