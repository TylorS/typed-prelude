import { describe, it } from '@typed/test'
import { NodeGenerator } from './NodeGenerator'

export const test = describe(`NodeGenerator`, [
  describe(`randomUuidSeed`, [
    it(`returns UuidSeed`, ({ equal }) => {
      const generator = new NodeGenerator()
      const seed = generator.randomUuidSeed()

      equal(16, seed.length)
    }),
  ]),
])
