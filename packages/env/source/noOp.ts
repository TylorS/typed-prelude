import { always } from '@typed/lambda/source'

import { Disposable } from '@typed/disposable/source'

export const noOp = always(Disposable.None)
