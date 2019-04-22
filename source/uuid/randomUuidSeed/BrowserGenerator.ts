import { UuidEnv, UuidSeed } from '../types'
import { VALID_UUID_LENGTH } from './constants'

export class BrowserGenerator implements UuidEnv {
  private browserCrypto: Crypto
  constructor() {
    this.browserCrypto = crypto || msCrypto
  }

  public randomUuidSeed = (): UuidSeed =>
    Array.from(this.browserCrypto.getRandomValues(new Uint8Array(VALID_UUID_LENGTH))) as UuidSeed
}
