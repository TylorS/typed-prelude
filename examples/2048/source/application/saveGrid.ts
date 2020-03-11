import { Disposable } from '@typed/disposable'
import { runEffect } from '@typed/effects'
import { execPure, handle } from '@typed/env'
import { Grid, GridRepository } from 'source/domain'

export function saveGrid<E>(repo: GridRepository<E>, environment: E) {
  return (grid: Grid): Disposable => execPure(handle(environment, runEffect(repo.updateGrid(grid))))
}
