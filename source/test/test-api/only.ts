import { Test } from '../types'
import { updateModifier } from './updateModifier'

export function only(test: Test): Test {
  return updateModifier('only', test)
}
