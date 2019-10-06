import { InitialValue, withCreateHook } from '@typed/hooks'
import { createUsePureState } from './createUsePureState'

export const createUseString = withCreateHook(
  createHook => createHook(createUsePureState),
  (useState, initial: InitialValue<string> = '') => useState(initial),
)
