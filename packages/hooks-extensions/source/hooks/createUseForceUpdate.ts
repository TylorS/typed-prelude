import { withCreateHook } from '@typed/hooks'
import { noOp } from '@typed/lambda'

export const createUseForceUpdate = withCreateHook(
  createHook =>
    createHook(context => ({ update: () => () => context.hasBeenUpdated(), dispose: noOp })),
  useForceUpdate => useForceUpdate(),
)
