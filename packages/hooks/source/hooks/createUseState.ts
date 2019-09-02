import { equals } from '@typed/logic'
import { getInitialValue, getUpdatedValue } from '../helpers'
import { CreateHookContext, Hook, InitialValue, ValueOrUpdate } from '../types'

export const createUseState = <A>(context: CreateHookContext, initialState: InitialValue<A>) =>
  new UseState<A>(context, getInitialValue(initialState))

export type CurrentAndUpdateState<A> = readonly [A, (update: ValueOrUpdate<A>) => A]

export class UseState<A> implements Hook<[InitialValue<A>], CurrentAndUpdateState<A>> {
  private value: [A, (update: ValueOrUpdate<A>) => A]

  constructor(private context: CreateHookContext, private initialState: A) {
    this.value = [initialState, this.updateState]
  }

  public update = (_: InitialValue<A>): CurrentAndUpdateState<A> => this.value

  public dispose = () => {
    this.value[0] = this.initialState
  }

  private updateState = (update: ValueOrUpdate<A>): A => {
    const currentState = this.value[0]
    const updated = getUpdatedValue(currentState, update)

    if (!equals(currentState, updated)) {
      this.value[0] = updated
      this.context.hasBeenUpdated()
    }

    return this.value[0]
  }
}
