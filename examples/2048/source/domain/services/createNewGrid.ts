import { Effects } from '@typed/effects'
import { UuidEnv } from '@typed/uuid'
import { Grid, RandomIntEnv, Size } from '../model'
import { addNewTile } from './addNewTile'

// Creates a new grid with 2 initial tiles
export function* createNewGrid(size: Size): Effects<RandomIntEnv & UuidEnv, Grid> {
  return yield* addNewTile(yield* addNewTile({ size, tiles: [] }))
}
