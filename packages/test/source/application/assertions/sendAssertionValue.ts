import { get } from '@typed/effects'
import { getLineNumberFromTarget } from './helpers'
import { AssertionValueEnv } from './types'

export function* sendAssertionValue(value: string, target?: Function) {
  const line = getLineNumberFromTarget(target)

  if (line === -1) {
    return
  }

  const e = yield* get<AssertionValueEnv>()

  e.sendAssertionValue({
    value,
    line,
  })
}
