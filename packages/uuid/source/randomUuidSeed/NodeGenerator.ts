import { UuidEnv, UuidSeed } from '../types'
import { VALID_UUID_LENGTH } from './constants'

export class NodeGenerator implements UuidEnv {
  private nodeCrypto: typeof import('crypto')
  constructor() {
    this.nodeCrypto = require('crypto')
  }

  public randomUuidSeed = (): UuidSeed => {
    const { data } = this.nodeCrypto.randomBytes(VALID_UUID_LENGTH).toJSON()

    return (data as any) as UuidSeed
  }
}
