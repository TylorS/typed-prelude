import { Test } from '../types'
import { updateModifier } from './updateModifier'

export function skip(test: Test): Test {
  return updateModifier('skip', test)
}
