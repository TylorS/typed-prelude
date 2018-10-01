import { RandomNumberGenerator, UuidSeed } from '../Uuid'
import { VALID_UUID_LENGTH } from './constants'

export class BrowserGenerator implements RandomNumberGenerator {
  private browserCrypto: Crypto
  constructor() {
    this.browserCrypto = crypto || msCrypto
  }

  public randomUuidSeed = (): UuidSeed =>
    (this.browserCrypto.getRandomValues(new Uint8Array(VALID_UUID_LENGTH)) as any) as UuidSeed
}
