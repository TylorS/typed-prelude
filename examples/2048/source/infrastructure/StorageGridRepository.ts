import { map, Maybe } from '@typed/maybe'
import { getItem, setItem, StorageEnv } from '@typed/storage'
import { Grid, GridRepository } from '../domain'

export function createGridRepository(storageKey: string): GridRepository<StorageEnv> {
  function* getGrid() {
    const gridJson = yield* getItem(storageKey)
    const grid: Maybe<Grid> = map(JSON.parse, gridJson)

    return grid
  }

  function* updateGrid(grid: Grid) {
    yield* setItem(storageKey, JSON.stringify(grid))

    return grid
  }

  return {
    getGrid,
    updateGrid,
  }
}
