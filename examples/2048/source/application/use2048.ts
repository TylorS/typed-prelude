import { Effect, get, runEffects } from '@typed/effects'
import { HookEffects, useEffect, useMemo, useState } from '@typed/hooks'
import { pipe } from '@typed/lambda'
import { Tuple } from '@typed/tuple'
import { convertSizeToBounds, getAllCoordinates, GridRepository } from '../domain'
import { useArrowKeys } from '../infrastructure/useArrowKeys'
import { createDispatch } from './createDispatch'
import { deriveState } from './deriveState'
import { getOrCreateGrid } from './getOrCreateGrid'
import { saveGrid } from './saveGrid'
import { Action, Dispatch, GameState } from './types'

export function* use2048<E>(repo: GridRepository<E>): HookEffects<E, Tuple<GameState, Dispatch>> {
  const resources = yield* get<E>()
  const [getGrid, setGrid] = yield* useState(() => getOrCreateGrid(repo))
  const grid = yield* getGrid()
  const bounds = yield* useMemo(convertSizeToBounds, [grid.size])
  const dispatchEffect = yield* useMemo(createDispatch, [bounds, grid, setGrid])
  // TODO: useMemo fails here when an array type is returned because it checks for Iterable and not Generator
  const coordinates = yield* useMemo(pipe(getAllCoordinates, Effect.of), [bounds])
  const gameState = yield* useMemo(deriveState, [grid, coordinates])
  const dispatch = yield* useMemo(f => (action: Action) => runEffects(f(action), resources), [
    dispatchEffect,
  ])

  yield* useArrowKeys(direction => dispatch(['move', direction]))

  // Persist grid to storage
  yield* useEffect(saveGrid(repo, resources), [grid])

  return [gameState, dispatch] as const
}
