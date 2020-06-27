import { Effects, get } from '@typed/effects'
import { AssertionValueEnv } from '../../model'
import { getLineNumberFromTarget } from './helpers'

export function* sendAssertionValue(
  value: string,
  target?: Function,
): Effects<AssertionValueEnv, void> {
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
