import { describe, given, it } from '@typed/test'
import { createVirtualTimer } from '@typed/timer'
import { delay, get } from '../factories'
import { Fail } from '../failures'
import { runEffects } from '../run'
import { FiberFailure, FiberState } from './Fiber'
import { fork, Fork } from './fork'
import { join, Join } from './join'
import { kill, Kill } from './kill'

export const test = describe('Fibers', [
  describe(`fork`, [
    given(`an effect`, [
      it(`creates a fiber to encapsulate scheduling`, ({ equal }) => {
        const timer = createVirtualTimer()

        function* eff() {
          yield* delay(100)
          const { a } = yield* get<{ a: number }>()

          return a
        }

        function* sut() {
          const fiber = yield* fork(eff())

          equal(FiberState.Running, fiber.info.state)
        }

        runEffects(sut(), {
          a: 1,
          timer,
          ...Fork,
          [FiberFailure]: Fail,
        })

        timer.progressTimeBy(100)
      }),
    ]),
  ]),

  describe(`join`, [
    given(`a Fiber`, [
      it(`joins a fiber back in process`, ({ equal }, done) => {
        const timer = createVirtualTimer()
        const a = 1
        const ms = 100

        function* eff() {
          yield* delay(ms)
          const { a } = yield* get<{ a: number }>()

          return a
        }

        function* sut() {
          try {
            const fiber = yield* fork(eff())

            equal(FiberState.Running, fiber.info.state)
            equal(a, yield* join(fiber))

            done()
          } catch (error) {
            done(error)
          }
        }

        runEffects(sut(), {
          a,
          timer,
          ...Fork,
          ...Join,
          [FiberFailure]: Fail,
        })

        timer.progressTimeBy(ms)
      }),
    ]),

    describe(`kill`, [
      given(`a Fiber`, [
        it(`joins a fiber back in process`, ({ equal }) => {
          const timer = createVirtualTimer()

          function* eff() {
            yield* delay(100)
            const { a } = yield* get<{ a: number }>()

            return a
          }

          function* sut() {
            const fiber = yield* fork(eff())

            equal(FiberState.Running, fiber.info.state)

            yield* kill(fiber)

            equal(FiberState.Error, fiber.info.state)
          }

          runEffects(sut(), {
            a: 1,
            timer,
            ...Fork,
            ...Kill,
            [FiberFailure]: Fail,
          })
        }),
      ]),
    ]),
  ]),
])
