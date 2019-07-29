import { createHook } from './createHook'
import { Channel, CreateHookContext, Hook } from './types'

export const useChannel = createHook(
  <A>(context: CreateHookContext, _: Channel<A>) => new UseChannel<A>(context),
)

export class UseChannel<A> implements Hook<[Channel<A>], A> {
  constructor(private context: CreateHookContext) {}

  public update = (channel: Channel<A>): A => this.context.consume(channel)

  public dispose = () => void 0
}
