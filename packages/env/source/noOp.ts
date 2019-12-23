import { Disposable } from '@typed/disposable'
import { always } from '@typed/lambda'

export const noOp = always(Disposable.None)
