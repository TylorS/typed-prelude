import { stringToArrayBuffer, CryptoEffects } from '../common'
import { generateShaHash } from './generateShaHash'

export const generateHashFromString = (str: string): CryptoEffects<unknown, ArrayBuffer> =>
  generateShaHash(256, stringToArrayBuffer(str))
