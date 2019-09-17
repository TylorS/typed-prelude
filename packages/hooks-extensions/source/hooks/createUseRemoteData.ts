import { CreateHookContext, createUseMemo, InitialValue, withCreateHook } from '@typed/hooks'
import { Loading, NoData, RemoteData } from '@typed/remote-data'
import { createUsePureState } from './createUsePureState'

export const createUseRemoteData = <A, B>(
  context: CreateHookContext,
  initialValue: InitialValue<RemoteData<A, B>> = NoData,
) => {
  const createUseRemoteDataHook = withCreateHook(
    createHook => [createHook(createUsePureState), createHook(createUseMemo)] as const,
    ([useState, useMemo], initialValue: InitialValue<RemoteData<A, B>> = NoData) => {
      const [remoteData, setRemoteData] = useState(initialValue)
      const updateFns = useMemo(() => ({
        clear: setRemoteData(NoData),
        loading: setRemoteData(Loading),
        failed: (value: A) => setRemoteData(RemoteData.failure(value)),
        succeeded: (value: B) => setRemoteData(RemoteData.of(value)),
      }))

      return [remoteData, updateFns] as const
    },
  )

  return createUseRemoteDataHook(context, initialValue)
}
