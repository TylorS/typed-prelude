import { Test } from '../types'
import { describe } from './describe'
import { updateModifier } from './updateModifier'

export function given(that: string, tests: Test[]): Test {
  return describe(`given ${that}`, tests)
}

export namespace given {
  export function only(what: string, tests: Test[]): Test {
    return updateModifier('only', given(what, tests))
  }

  export function skip(what: string, tests: Test[]): Test {
    return updateModifier('skip', given(what, tests.map(x => updateModifier('skip', x))))
  }
}
