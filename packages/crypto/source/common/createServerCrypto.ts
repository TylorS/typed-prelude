export function createServerCrypto(): Crypto {
  const { Crypto }: typeof import('@peculiar/webcrypto') = require('@peculiar/webcrypto')

  return new Crypto()
}
