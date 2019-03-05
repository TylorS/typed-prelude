import { RandomNumberGenerator, UuidSeed } from '../Uuid'
import { VALID_UUID_LENGTH } from './constants'

export class NodeGenerator implements RandomNumberGenerator {
  private nodeCrypto: typeof import('crypto')
  constructor() {
    this.nodeCrypto = require('crypto')
  }

  public randomUuidSeed = (): UuidSeed => {
    const { data } = this.nodeCrypto.randomBytes(VALID_UUID_LENGTH).toJSON()

    return data as UuidSeed
  }
}
