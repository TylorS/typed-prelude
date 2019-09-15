import { createChannel } from '@typed/hooks'
import { createHttpEnv, HttpEnv } from '@typed/http'
import { createChannelHooks } from '../hooks'

export const HttpEnvChannel = createChannel<HttpEnv>(createHttpEnv())

export const [createUseHttpEnv, createProvideHttpEnv] = createChannelHooks(HttpEnvChannel)
