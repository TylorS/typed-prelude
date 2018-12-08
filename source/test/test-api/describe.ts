import { Nothing } from '../../maybe'
import { Test, TYPED_COLLECTION } from '../types'
import { updateModifier } from './updateModifier'

export function describe(what: string, tests: Test[]): Test {
  return {
    [TYPED_COLLECTION]: {
      name: what,
      timeout: Nothing,
      modifier: 'default',
      tests,
    },
  }
}

export namespace describe {
  export function only(what: string, tests: Test[]): Test {
    return updateModifier('only', describe(what, tests))
  }

  export function skip(what: string, tests: Test[]): Test {
    return updateModifier('skip', describe(what, tests))
  }
}
