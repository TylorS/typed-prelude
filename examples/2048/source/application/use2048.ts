import { DomEnv } from '@typed/dom'
import { get, runEffects, TimerEnv } from '@typed/effects'
import { HookEffects, useEffect, useMemo, useState } from '@typed/hooks'
import { Tuple } from '@typed/tuple'
import { UuidEnv } from '@typed/uuid'
import { convertSizeToBounds, getAllCoordinates, GridRepository, RandomIntEnv } from '../domain'
import { useArrowKeys } from '../infrastructure/useArrowKeys'
import { createDispatch } from './createDispatch'
import { deriveState } from './deriveState'
import { getOrCreateGrid } from './getOrCreateGrid'
import { saveGrid } from './saveGrid'
import { Action, Dispatch, GameState } from './types'

export type RequiredResources = UuidEnv & DomEnv & RandomIntEnv & TimerEnv

export function* use2048<E>(
  repo: GridRepository<E>,
): HookEffects<E & RequiredResources, Tuple<GameState, Dispatch>> {
  const resources = yield* get<E & RequiredResources>()
  const [getGrid, setGrid] = yield* useState(() => getOrCreateGrid(repo))
  const grid = yield* getGrid()
  const bounds = yield* useMemo(convertSizeToBounds, [grid.size])
  const dispatchEffect = yield* useMemo(createDispatch, [bounds, getGrid, setGrid])
  const coordinates = yield* useMemo(getAllCoordinates, [bounds])
  const gameState = yield* useMemo(deriveState, [grid, coordinates])
  const dispatch = yield* useMemo(f => (action: Action) => runEffects(f(action), resources), [
    dispatchEffect,
  ])

  yield* useArrowKeys(direction => dispatch(['move', direction]))

  // Persist grid to storage
  yield* useEffect(saveGrid(repo, resources), [grid])

  return [gameState, dispatch] as const
}
