import { chain, execPure, map, Pure } from '@typed/env'
import { append } from '@typed/list'
import * as React from 'react'
import { useDisposable } from './useDisposable'
import { useList } from './useList'
import { usePureState } from './usePureState'

export function useUndoRedo<A>(value: A): UndoRedo<A> {
  const [currentIndex, setCurrentIndex] = usePureState(0)
  const [history, setHistory] = useList<A>([value])
  const hasPrevious = () => currentIndex > 0
  const hasNext = () => !!history[currentIndex + 1]

  const getPreviousValues = React.useCallback(
    () => (hasPrevious() ? history.slice(0, currentIndex - 1) : []),
    [currentIndex],
  )
  const getNextValues = React.useCallback(
    () => (hasNext() ? history.slice(currentIndex + 1) : []),
    [currentIndex],
  )

  useDisposable(
    () => execPure(chain(() => setCurrentIndex(x => x + 1), setHistory(append(value)))),
    [value],
  )

  const currentValue = history[currentIndex]

  return {
    previousValues: getPreviousValues(),
    currentValue,
    nextValues: getNextValues(),
    previous: map(() => currentValue, setCurrentIndex(x => (hasPrevious() ? x - 1 : x))),
    next: map(() => currentValue, setCurrentIndex(x => (hasNext() ? x + 1 : x))),
    clear: map(() => value, chain(() => setCurrentIndex(() => 0), setHistory(() => [value]))),
  }
}

export type UndoRedo<A> = {
  previousValues: ReadonlyArray<A>
  currentValue: A
  nextValues: ReadonlyArray<A>

  previous: Pure<A>
  next: Pure<A>
  clear: Pure<A>
}
