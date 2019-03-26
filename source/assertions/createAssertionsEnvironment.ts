import { curry } from '@typed/lambda'
import { ok } from 'power-assert'
import { doesNotThrow } from './doesNotThrow'
import { equal } from './equal'
import { notEqual } from './notEqual'
import { notOk } from './notOk'
import { notSame } from './notSame'
import { rejects } from './rejects'
import { same } from './same'
import { throws } from './throws'

export interface AssertionEnvironment {
  readonly stats: AssertionContext
  readonly context: AssertionContext
  readonly assertions: Assertions
}

export interface Assertions {
  readonly equal: typeof equal
  readonly notEqual: typeof notEqual
  readonly notOk: typeof notOk
  readonly notSame: typeof notSame
  readonly ok: typeof ok
  readonly rejects: typeof rejects
  readonly same: typeof same
  readonly throws: typeof throws
  readonly doesNotThrow: typeof doesNotThrow
}

export interface AssertionContext {
  count: number
}

export function createAssertionsEnvironment(): AssertionEnvironment {
  const context: AssertionContext = { count: 0 }

  return {
    stats: context,
    context,
    assertions: {
      equal: curry((a, b) => (context.count++, equal(a, b))),
      notEqual: curry((a, b) => (context.count++, notEqual(a, b))),
      notOk: x => (context.count++, notOk(x)),
      notSame: curry((a, b) => (context.count++, notSame(a, b))),
      ok: x => (context.count++, ok(x)),
      rejects: <Err extends Error = Error>(promise: Promise<any>) => (
        context.count++, rejects<Err>(promise)
      ),
      same: curry((a, b) => (context.count++, same(a, b))),
      throws: <Err extends Error = Error>(fn: () => any) => (context.count++, throws<Err>(fn)),
      doesNotThrow: x => (context.count++, doesNotThrow(x)),
    },
  }
}
