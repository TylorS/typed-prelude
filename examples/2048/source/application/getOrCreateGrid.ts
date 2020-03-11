import { fromJust, isJust } from '@typed/maybe'
import { createNewGrid, GridRepository } from '../domain'

export function* getOrCreateGrid<E>(repo: GridRepository<E>) {
  const savedGame = yield* repo.getGrid()

  if (isJust(savedGame)) {
    return fromJust(savedGame)
  }

  return yield* createNewGrid([4, 4])
}
