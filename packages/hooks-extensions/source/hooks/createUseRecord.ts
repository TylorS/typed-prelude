import { CreateHookContext, createUseMemo, InitialValue, withCreateHook } from '@typed/hooks'
import { dissoc, set } from '@typed/objects'
import { createUsePureState } from './createUsePureState'

export const createUseRecord = <A extends Record<PropertyKey, unknown>>(
  context: CreateHookContext,
  initialValue: InitialValue<A> = {} as A,
) => {
  const createUseRecordHook = withCreateHook(
    createHook => [createHook(createUsePureState), createHook(createUseMemo)] as const,
    ([useState, useMemo], initial: InitialValue<A> = {} as A) => {
      const [record, setRecord] = useState(initial)

      return [
        record,
        {
          getItem: useMemo(r => <K extends keyof A>(k: K): A[K] => r[k], [record]),
          setItem: useMemo(
            setRecord => <K extends keyof A>(key: K, value: A[K]) => setRecord(set(key, value)),
            [setRecord],
          ),
          removeItem: useMemo(
            setRecord => <K extends keyof A>(key: K) =>
              setRecord(r => (dissoc(key, r) as any) as A),
            [setRecord],
          ),
          clear: setRecord({} as A),
        },
      ] as const
    },
  )

  return createUseRecordHook(context, initialValue)
}
