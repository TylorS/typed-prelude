import { dispose } from '@most/disposable'
import { withPrevious } from '@typed/lambda/withPrevious'

export const disposePrevious = withPrevious(dispose)
