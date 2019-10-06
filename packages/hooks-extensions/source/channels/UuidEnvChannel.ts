import { createChannel, CreateHook, createUseMemo, withCreateHook } from '@typed/hooks'
import { randomUuidSeed, Uuid, uuid4, UuidEnv } from '@typed/uuid'
import { createChannelHooks } from '../hooks/createChannelHooks'

export const UuidEnvChannel = createChannel<UuidEnv>({ randomUuidSeed })

export const [createUseUuidEnv, createProvideUuidEnv] = createChannelHooks(UuidEnvChannel)

const createWithUuidEnv = ({ randomUuidSeed }: UuidEnv) => () => uuid4(randomUuidSeed())

export const createUseUuid: CreateHook<[], () => Uuid> = withCreateHook(
  createHook => [createHook(createUseUuidEnv), createHook(createUseMemo)] as const,
  ([useUuidEnv, useMemo]) => useMemo(createWithUuidEnv, [useUuidEnv()]),
)
