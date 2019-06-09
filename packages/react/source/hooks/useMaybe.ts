import { Pure } from '@typed/env'
import { Just, Maybe, Nothing } from '@typed/maybe'
import { usePureState } from './usePureState'

export function useMaybe<A>(defaultValue?: Maybe<A>): UseMaybe<A> {
  const [state, setState] = usePureState(defaultValue || Nothing)

  return [state, (value: A) => setState(() => Just.of(value)), setState(() => Nothing)]
}

export type UseMaybe<A> = [Maybe<A>, (value: A) => Pure<Maybe<A>>, Pure<Nothing>]
