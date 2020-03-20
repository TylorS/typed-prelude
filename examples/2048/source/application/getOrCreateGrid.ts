import { Effects } from '@typed/effects'
import { fromJust, isJust } from '@typed/maybe'
import { UuidEnv } from '@typed/uuid'
import { createNewGrid, Grid, GridRepository, RandomIntEnv } from '../domain'

export function* getOrCreateGrid<E>(
  repo: GridRepository<E>,
): Effects<E & RandomIntEnv & UuidEnv, Grid> {
  const savedGame = yield* repo.getGrid()

  if (isJust(savedGame)) {
    return fromJust(savedGame)
  }

  return yield* createNewGrid([4, 4])
}
