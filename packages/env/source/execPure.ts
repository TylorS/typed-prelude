import { Disposable } from '@typed/disposable'
import { always } from '@typed/lambda'
import { Pure } from './Env'
import { runPure } from './runPure'

const noOp = always(Disposable.None)

/**
 * Execute a pure ignoring the value it produces.
 * @param pure :: Pure *
 * @returns :: Disposable
 */
export const execPure = (pure: Pure<any>): Disposable => runPure(noOp, pure)
