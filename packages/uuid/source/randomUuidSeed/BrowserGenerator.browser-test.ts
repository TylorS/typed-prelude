import { describe, it } from '@typed/test'
import { BrowserGenerator } from './BrowserGenerator'

export const test = describe(`BrowserGenerator`, [
  describe(`randomUuidSeed`, [
    it(`returns UuidSeed`, ({ equal }) => {
      const generator = new BrowserGenerator()
      const seed = generator.randomUuidSeed()

      equal(16, seed.length)
    }),
  ]),
])
