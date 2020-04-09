import { describe, given, it } from '@typed/test'
import { get } from '../factories'
import { runEffects } from './runEffects'

export const test = describe(`runEffects`, [
  given(`an Effect and resources`, [
    it(`runs the effect given those resources`, ({ equal }) => {
      const x = 1
      const y = 2
      const z = 5
      const addY = function* (x: number) {
        const { y } = yield* get<{ y: number }>()

        return x + y
      }
      const addX = function* (y: number) {
        const { x } = yield* get<{ x: number }>()

        return x + y
      }

      const main = function* main() {
        const a = yield* addY(z)
        const b = yield* addX(z)

        equal(y + z, a)
        equal(x + z, b)

        return [a, b] as const
      }

      runEffects(main(), { x, y })
    }),
  ]),
])
