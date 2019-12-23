import { Disposable } from '@typed/disposable'
import { Pure } from './Env'
import { noOp } from './noOp'
import { runPure } from './runPure'

/**
 * Execute a pure ignoring the value it produces.
 * @param pure :: Pure *
 * @returns :: Disposable
 */
export const execPure = (pure: Pure<any>): Disposable => runPure(noOp, pure)
