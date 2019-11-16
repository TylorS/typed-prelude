import { Disposable } from '@typed/disposable'
import { execPure, Pure } from '@typed/env'
import {
  CreateHookContext,
  createUseEffect,
  createUseMemo,
  createUseState,
  withCreateHook,
} from '@typed/hooks'
import { pipe } from '@typed/lambda'
import { length } from '@typed/list'
import { createUseList } from './createUseList'

const decrement = (x: number) => x - 1

export function createUseUndoRedo<A>(context: CreateHookContext, value: A) {
  const createUseUndoRedoHook = withCreateHook(
    createHook =>
      [
        createHook(createUseList),
        createHook(createUseState),
        createHook(createUseEffect),
        createHook(createUseMemo),
      ] as const,
    ([useList, useState, useEffect, useMemo], value: A) => {
      const [history, { append }] = useList<A>(() => [value])
      const maxLength = useMemo(pipe(length, decrement), [history])
      const [index, setIndex] = useState<number>(0)
      const [firstRun, setFirstRun] = useState(true)
      const currentValue = history[index]

      useEffect(
        (value: A) => {
          if (firstRun) {
            setFirstRun(false)
          } else {
            execPure(append(value))
          }

          return Disposable.None
        },
        {
          args: [value],
        },
      )

      const goBack = Pure.fromIO(() => history[setIndex(Math.max(0, index - 1))])
      const goForward = Pure.fromIO(() => history[setIndex(Math.min(maxLength, index + 1))])

      return [currentValue, { goBack, goForward, numberOfEntries: maxLength + 1 } as const] as const
    },
  )

  return createUseUndoRedoHook(context, value)
}
