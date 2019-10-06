import { withCreateHook } from '@typed/hooks'
import { createUsePureState } from './createUsePureState'

export const createUseBool = withCreateHook(
  createHook => createHook(createUsePureState),
  (useState, initial: boolean = false) => {
    const [bool, setBool] = useState(initial)

    return [bool, (updatedBool = !bool) => setBool(updatedBool)] as const
  },
)
