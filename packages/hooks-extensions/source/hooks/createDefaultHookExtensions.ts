import { HooksManager } from '@typed/hooks'
import { createDefaultChannelHooks } from '../channels'
import { createUseBool } from './createUseBool'
import { createUseConditional } from './createUseConditional'
import { createUseEither } from './createUseEither'
import { createUseFilter } from './createUseFilter'
import { createUseForceUpdate } from './createUseForceUpdate'
import { createUseHttp } from './createUseHttp'
import { createUseIterable } from './createUseIterable'
import { createUseList } from './createUseList'
import { createUseListOfHooks } from './createUseListOfHooks'
import { createUseMap } from './createUseMap'
import { createUseMatch } from './createUseMatch'
import { createUseMaybe } from './createUseMaybe'
import { createUsePromise } from './createUsePromise'
import { createUsePure } from './createUsePure'
import { createUsePureState } from './createUsePureState'
import { createUseRecord } from './createUseRecord'
import { createUseRemoteData } from './createUseRemoteData'
import { createUseRoute } from './createUseRoute'
import { createUseSet } from './createUseSet'
import { createUseSort } from './createUseSort'
import { createUseStorage } from './createUseStorage'
import { createUseString } from './createUseString'
import { createUseSubscription } from './createUseSubscription'
import { createUseTuple } from './createUseTuple'

export function createDefaultHookExtensions(createHook: HooksManager['createHook']) {
  return {
    useBool: createHook(createUseBool),
    usConditional: createHook(createUseConditional),
    useEither: createHook(createUseEither),
    useFilter: createHook(createUseFilter),
    useForceUpdate: createHook(createUseForceUpdate),
    useHttp: createHook(createUseHttp),
    useIterable: createHook(createUseIterable),
    useList: createHook(createUseList),
    useListOfHooks: createHook(createUseListOfHooks),
    useMap: createHook(createUseMap),
    useMatch: createHook(createUseMatch),
    useMaybe: createHook(createUseMaybe),
    usePromise: createHook(createUsePromise),
    usePure: createHook(createUsePure),
    useState: createHook(createUsePureState),
    useStorage: createHook(createUseStorage),
    useRecord: createHook(createUseRecord),
    useRemoteData: createHook(createUseRemoteData),
    useRoute: createHook(createUseRoute),
    useSet: createHook(createUseSet),
    useSort: createHook(createUseSort),
    useString: createHook(createUseString),
    useSubscription: createHook(createUseSubscription),
    useTuple: createHook(createUseTuple),
    ...createDefaultChannelHooks(createHook),
  } as const
}
