import { stringToArrayBuffer } from './stringToArrayBuffer'

export function deriveSalt(sizeOrValue: string | number): Uint8Array {
  return typeof sizeOrValue === 'string'
    ? new Uint8Array(stringToArrayBuffer(sizeOrValue))
    : new Uint8Array(sizeOrValue)
}
