import { Either } from '@typed/either'
import { Pure } from '@typed/env'
import { always } from '@typed/lambda'
import { usePureState } from './usePureState'

export function useEither<A, B>(defaultValue: Either<A, B>): UseEither<A, B> {
  const [state, setState] = usePureState(defaultValue)
  const left = (value: A) => setState(always(Either.left<A, B>(value)))
  const right = (value: B) => setState(always(Either.of<B, A>(value)))

  return [state, left, right]
}

export type UseEither<A, B> = [
  Either<A, B>,
  (value: A) => Pure<Either<A, B>>,
  (value: B) => Pure<Either<A, B>>
]
