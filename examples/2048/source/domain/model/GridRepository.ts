import { Effects } from '@typed/effects'

import { Maybe } from '@typed/maybe'
import { Grid } from './Grid'

export interface GridRepository<E> {
  readonly getGrid: () => Effects<E, Maybe<Grid>>
  readonly updateGrid: (grid: Grid) => Effects<E, Grid>
}
