import { equals } from '@typed/logic'
import { Channel } from '../Channel'
import { CreateHookContext, Hook } from '../types'

export const createUseProvider = <A>(
  context: CreateHookContext,
  channel: Channel<A>,
  initialValue?: A,
) => new UseProvider(context, channel, initialValue)

export class UseProvider<A> implements Hook<[Channel<A>, A?], readonly [A, (value: A) => A]> {
  private returnValue: [A, (value: A) => A]

  constructor(
    private context: CreateHookContext,
    private channel: Channel<A>,
    private initialValue: A = channel.defaultValue,
  ) {
    this.returnValue = [initialValue, this.updateValue]
    this.context.provide(channel, initialValue)
  }

  public update = (
    channel: Channel<A>,
    initialValue: A = channel.defaultValue,
  ): readonly [A, (value: A) => A] => {
    if (!equals(this.channel, channel)) {
      this.returnValue[0] = initialValue
      this.context.provide(channel, initialValue)
    }

    return this.returnValue
  }

  public dispose = () => {
    this.returnValue[0] = this.initialValue
  }

  private updateValue = (value: A) => {
    if (!equals(this.returnValue[0], value)) {
      this.returnValue[0] = value
      this.context.provide(this.channel, value)
      this.context.hasBeenUpdated()
    }

    return value
  }
}
