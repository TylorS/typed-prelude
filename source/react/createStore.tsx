import { disposeNone } from '@most/disposable'
import { Disposable } from '@most/types'
import * as React from 'react'
import { Effect } from '../effect'
import { Arity1 } from '../lambda'
import { createStore as createTypedStore, Store, TypedStoreOptions } from '../store'
import { DeepEqualityComponent } from './DeepEqualityComponent'

export interface TypedStore<A> extends Store<A> {
  readonly Provider: React.ComponentType
  readonly Consumer: React.Consumer<TypedStoreConsumerProps<A>>
}
export type TypedStoreConsumerProps<A> = {
  readonly currentState: A
  readonly undo: Effect<A>
  readonly redo: Effect<A>
  readonly reset: Effect<A>
  readonly update: <Resources>(stateEffect: Effect<Arity1<A, A>, Resources>) => Effect<A, Resources>
}

export function createStore<A>(defaultState: A, options: TypedStoreOptions = {}): TypedStore<A> {
  const { undo, redo, reset, update, listen, state } = createTypedStore(defaultState, options)
  const { Provider, Consumer } = React.createContext<TypedStoreConsumerProps<A>>({
    currentState: defaultState,
    undo,
    redo,
    reset,
    update,
  })

  class TypedProvider extends DeepEqualityComponent<{}, { currentState: A }> {
    private disposable: Disposable = disposeNone()

    public componentDidMount() {
      this.disposable = listen(state => this.setState({ currentState: state }))
    }

    public componentWillUnmount() {
      this.disposable.dispose()
    }

    public render() {
      return (
        <Provider
          value={{
            currentState: this.state.currentState,
            undo,
            redo,
            reset,
            update,
          }}
        />
      )
    }
  }

  return { Provider: TypedProvider, Consumer, undo, redo, reset, update, state, listen }
}
