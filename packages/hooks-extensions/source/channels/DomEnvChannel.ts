import { createDomEnv, DomEnv } from '@typed/dom'
import { Channel, createChannel, CreateHookContext } from '@typed/hooks'
import { id } from '@typed/lambda'
import { withUseProvider } from '../hooks/withProvideChannel'
import { withUseChannel } from '../hooks/withUseChannel'

export const DomEnvChannel = createChannel(createDomEnv<unknown>())

export const createUseDomEnv = <A>(context: CreateHookContext) =>
  withUseChannel(id, DomEnvChannel as Channel<DomEnv<A>>)(context)

export const createProvideDomEnv = <A>(context: CreateHookContext, domEnv: DomEnv<A>) =>
  withUseProvider(DomEnvChannel)(context, domEnv)
