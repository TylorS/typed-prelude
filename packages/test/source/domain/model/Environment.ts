import * as t from '@typed/io'
import { NewType } from '@typed/new-type'

export type Environment = NewType<string, 'Environment'>
export const Environment = t.refinement(
  t.String,
  (s): s is Environment => t.String.is(s),
  'Environment',
)
