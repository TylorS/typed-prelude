import { chain, execPure, map, Pure } from '@typed/env'
import { append } from '@typed/list'
import { useMemo } from '../tagged'
import { useDisposable } from './useDisposable'
import { useList } from './useList'
import { usePureState } from './usePureState'

export function useUndoRedo<A>(value: A): UndoRedo<A> {
  const [currentIndex, setCurrentIndex] = usePureState(0)
  const [history, setHistory] = useList<A>([value])
  const memoDeps = [currentIndex, ...history]
  const hasPrevious = useMemo(() => currentIndex > 0, memoDeps)
  const hasNext = useMemo(() => !!history[currentIndex + 1], memoDeps)
  const previousValues = useMemo(
    () => (hasPrevious ? history.slice(0, currentIndex - 1) : []),
    memoDeps,
  )
  const nextValues = useMemo(() => (hasNext ? history.slice(currentIndex + 1) : []), memoDeps)

  useDisposable(
    () => execPure(chain(() => setCurrentIndex(x => x + 1), setHistory(append(value)))),
    [value],
  )

  const currentValue = history[currentIndex]

  return {
    previousValues,
    currentValue,
    nextValues,
    previous: map(() => currentValue, setCurrentIndex(x => (hasPrevious ? x - 1 : x))),
    next: map(() => currentValue, setCurrentIndex(x => (hasNext ? x + 1 : x))),
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
