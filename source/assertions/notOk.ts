import { ok } from 'power-assert'

export const notOk = (bool: boolean) => {
  ok(!bool)

  return bool
}
