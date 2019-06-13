import { Pure } from '@typed/env'
import { always, pipe } from '@typed/lambda'
import { Just, Maybe, Nothing } from '@typed/maybe'
import { usePureState } from './usePureState'

export function useMaybe<A>(defaultValue?: Maybe<A>): UseMaybe<A> {
  const [state, setState] = usePureState(defaultValue || Nothing)

  return [
    state,
    pipe(
      Just.of,
      always,
      setState,
    ),
    setState(always(Nothing)),
  ]
}

export type UseMaybe<A> = [Maybe<A>, (value: A) => Pure<Maybe<A>>, Pure<Nothing>]
