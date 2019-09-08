import { Either } from '@typed/either'
import { CreateHookContext, createUseCallback, InitialValue, withCreateHook } from '@typed/hooks'
import { createUsePureState } from './createUsePureState'

export const createUseEither = <A, B>(
  context: CreateHookContext,
  either: InitialValue<Either<A, B>>,
) => {
  const createUseEitherHook = withCreateHook(
    createHook => [createHook(createUsePureState), createHook(createUseCallback)] as const,
    ([useState, useCallback], either: InitialValue<Either<A, B>>) => {
      const [state, setState] = useState(either)
      const left = useCallback((value: A) => setState(Either.left(value)), [state])
      const right = useCallback((value: B) => setState(Either.of(value)), [state])

      return [state, left, right] as const
    },
  )

  return createUseEitherHook(context, either)
}
