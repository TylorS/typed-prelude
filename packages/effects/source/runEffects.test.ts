import { describe, given, it } from '@typed/test'
import { Effect, EffectResources } from './Effect'
import { get } from './get'
import { runEffects } from './runEffects'

export const test = describe(`runEffects`, [
  given(`an Effect and resources`, [
    it(`runs the effect given those resources`, ({ equal }) => {
      const x = 1
      const y = 2
      const addY = Effect.create(function*(x: number) {
        const { y } = yield* get<{ y: number }>()

        return x + y
      })
      const addX = Effect.create(function*(y: number) {
        const { x } = yield* get<{ x: number }>()

        return x + y
      })

      const main = Effect.create(function* main() {
        const a = yield* addY(5)
        const b = yield* addX(5)

        return [a, b] as const
      })

      runEffects(main(), { x, y })
    }),
  ]),
])
