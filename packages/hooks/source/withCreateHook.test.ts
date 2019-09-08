import { same } from '@typed/assertions'
import { describe, it } from '@typed/test'
import { createUseState } from './hooks'
import { createManager } from './manager'
import { InitialValue } from './types'
import { withCreateHook } from './withCreateHook'

export const test = describe(`withCreateHook`, [
  it(`allows building on other hooks`, ({ notOk, ok }) => {
    const createUseBool = withCreateHook(
      createHook => createHook(createUseState),
      (useState, initialValue?: InitialValue<boolean>) => {
        const [bool, setBool] = useState(initialValue)

        return [bool, (updated: boolean = !bool) => setBool(updated)] as const
      },
    )
    const { createHook, withHooks } = createManager()
    const useBool = createHook(createUseBool)
    const f = withHooks(useBool)

    let [bool, toggleBool] = f()

    notOk(bool)
    toggleBool()
    ;[bool, toggleBool] = f()

    ok(bool)
    toggleBool()
    ;[bool, toggleBool] = f()

    notOk(bool)
    toggleBool(false)
    ;[bool, toggleBool] = f()

    notOk(bool)
  }),
])
