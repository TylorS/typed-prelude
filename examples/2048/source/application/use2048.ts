import { DomEnv } from '@typed/dom'
import { get, TimerEnv } from '@typed/effects'
import { HookEffects, HooksManagerEnv, useEffect, useMemo, useState } from '@typed/hooks'
import { Tuple } from '@typed/tuple'
import { UuidEnv } from '@typed/uuid'
import { convertSizeToBounds, getAllCoordinates, GridRepository, RandomIntEnv } from '../domain'
import { useArrowKeys } from '../infrastructure/useArrowKeys'
import { createDispatch } from './createDispatch'
import { deriveState } from './deriveState'
import { getOrCreateGrid } from './getOrCreateGrid'
import { saveGrid } from './saveGrid'
import { Dispatch, GameState } from './types'

export type RequiredResources = UuidEnv & DomEnv & RandomIntEnv & TimerEnv & HooksManagerEnv

export function* use2048<E>(
  repo: GridRepository<E>,
): HookEffects<
  E & RequiredResources,
  Tuple<GameState, Dispatch<RandomIntEnv & UuidEnv & TimerEnv>>
> {
  const resources = yield* get<E & RequiredResources>()
  const [getGrid, setGrid] = yield* useState(() => getOrCreateGrid(repo))
  const grid = yield* getGrid()
  const bounds = yield* useMemo(convertSizeToBounds, [grid.size])
  const dispatch = yield* useMemo(createDispatch, [bounds, getGrid, setGrid])
  const coordinates = yield* useMemo(getAllCoordinates, [bounds])
  const gameState = yield* useMemo(deriveState, [grid, coordinates])

  yield* useArrowKeys((direction) => dispatch(['move', direction]))

  // Persist grid to storage
  yield* useEffect(saveGrid(repo, resources), [grid])

  return [gameState, dispatch] as const
}
