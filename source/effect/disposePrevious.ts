import { dispose } from '@most/disposable'
import { withPrevious } from '../lambda/withPrevious'

export const disposePrevious = withPrevious(dispose)
