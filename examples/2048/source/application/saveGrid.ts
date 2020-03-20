import { Disposable } from '@typed/disposable'
import { runEffect } from '@typed/effects'
import { execPure, provide, Pure } from '@typed/env'
import { Grid, GridRepository } from 'source/domain'

export function saveGrid<E>(repo: GridRepository<E>, environment: E) {
  return (grid: Grid): Disposable =>
    execPure(provide(runEffect(repo.updateGrid(grid)), environment) as Pure<Grid>)
}
