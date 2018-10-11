import * as React from 'react'
import { equals } from '../common/equals'
import { Effect, EffectResources } from '../effect'
import { Arity1 } from '../lambda'

export type StateContextChildProps<State, Resources> = {
  currentState: State
  updateState: (effect: Effect<Arity1<State, State>, Resources>) => Promise<void>
  reset: () => Promise<void>
}

export function createStateContext<State, Resources extends {}>(
  defaultState: State,
  resources: EffectResources<Resources>,
): {
  Provider: React.ComponentClass
  Consumer: React.Consumer<StateContextChildProps<State, Resources>>
} {
  const Context = React.createContext(void 0 as any) as React.Context<
    StateContextChildProps<State, Resources>
  >

  class Provider extends React.Component<{}, State> {
    public state: State = defaultState

    public shouldComponentUpdate(_: {}, prevState: State) {
      return !equals(this.state, prevState)
    }

    public render() {
      return React.createElement(
        Context.Provider,
        { value: { currentState: this.state, updateState: this.updateState, reset: this.reset } },
        this.props.children,
      )
    }

    public reset = (): Promise<void> =>
      new Promise<void>(resolve => this.setState(defaultState, resolve))

    public updateState = (stateEff: Effect<Arity1<State, State>, Resources>): Promise<void> =>
      new Promise<void>(resolve =>
        stateEff.runEffect(
          updateState => this.setState(updateState, () => resolve(void 0)),
          resources,
        ),
      )
  }

  return { Provider, Consumer: Context.Consumer }
}
