import { createChannel } from '@typed/hooks'
import { randomUuidSeed, UuidEnv } from '@typed/uuid'
import { createChannelHooks } from '../hooks/createChannelHooks'

export const UuidEnvChannel = createChannel<UuidEnv>({ randomUuidSeed })

export const [createUseUuidEnv, createProvideUuidEnv] = createChannelHooks(UuidEnvChannel)
