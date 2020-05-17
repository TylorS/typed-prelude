import { Assertions } from '@typed/assertions'
import { createServerCrypto, CryptoEnv, CryptoFailure } from '@typed/crypto'
import { Effects, Fail, PureEffect, runEffects } from '@typed/effects'
import { createTestHookEnvironment, HookEnv, HooksManagerEnv } from '@typed/hooks'
import { createConsoleLogger, LoggerEnv, LogLevel } from '@typed/logger'
import { it as testIt, Test } from '@typed/test'
import { createVirtualTimer, VirtualTimer } from '@typed/timer'
import { NodeGenerator, UuidEnv } from '@typed/uuid'
import { createCssEnv } from './createCssEnv'
import { CssEnv } from './CssEnv'

export type CssTestEnv = VirtualTimerEnv &
  UuidEnv &
  CssEnv &
  HooksManagerEnv &
  HookEnv &
  CryptoEnv &
  CryptoFailure &
  LoggerEnv

export type VirtualTimerEnv = { readonly timer: VirtualTimer }

export function it(
  does: string,
  what: (assertions: Assertions & VirtualTimerEnv) => PureEffect<any> | Effects<CssTestEnv, any>,
): Test {
  return testIt(does, (assertions, done) => {
    const timer = createVirtualTimer()
    const uuidEnv = new NodeGenerator()
    const env = createTestHookEnvironment(uuidEnv)

    function* sut() {
      try {
        yield* what({ ...assertions, timer })

        done()
      } catch (error) {
        done(error)
      }
    }

    runEffects(sut(), {
      ...uuidEnv,
      ...createCssEnv(),
      ...env,
      [CryptoFailure]: Fail,
      crypto: createServerCrypto(),
      logger: createConsoleLogger({ logLevel: LogLevel.DEBUG, clock: timer }),
    })
  })
}
