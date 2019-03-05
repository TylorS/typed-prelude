import { RandomNumberGenerator, UuidSeed } from '../Uuid'
import { VALID_UUID_LENGTH } from './constants'

export class BrowserGenerator implements RandomNumberGenerator {
  private browserCrypto: Crypto
  constructor() {
    this.browserCrypto = crypto || msCrypto
  }

  public randomUuidSeed = (): UuidSeed =>
    Array.from(this.browserCrypto.getRandomValues(new Uint8Array(VALID_UUID_LENGTH))) as UuidSeed
}
