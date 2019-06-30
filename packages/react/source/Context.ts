import * as React from 'react'
import {
  CombinedProps,
  CombinedRenderProps,
  ContainerComponent,
  ContextComponent,
  Contexts,
} from './types'
import { withMemo } from './withMemo'

export function createContextFromContainer<A extends {}, B>(
  Container: ContainerComponent<A, B>,
): ContextComponent<A, B> {
  // No Default Value means unable
  const Context = React.createContext(void 0 as any)

  const Provider: React.ComponentType<A> = props =>
    React.createElement(Container as any, props, (value: B) =>
      React.createElement(Context.Provider, { value }, props.children),
    )

  return {
    Provider,
    Consumer: Context.Consumer,
    useContext: () => React.useContext(Context),
  }
}

export function combineContexts<A extends Contexts>(
  contexts: A,
): ContextComponent<CombinedProps<A>, CombinedRenderProps<A>> {
  const Context = React.createContext<CombinedRenderProps<A>>(void 0 as any)
  const keys = Object.keys(contexts)

  if (keys.length === 0) {
    throw new Error('Nothing to combine')
  }

  const Providers = combineProviders(keys, contexts)
  const Consumers = combineConsumers(keys, contexts)

  const Provider: ProviderComponent<A> = ({ children, ...providerProps }) =>
    React.createElement(
      Providers,
      providerProps as any,
      React.createElement(Consumers, null, (value: CombinedRenderProps<A>) =>
        React.createElement(Context.Provider, { value }, children),
      ),
    )

  return {
    Provider,
    Consumer: Context.Consumer,
    useContext: () => React.useContext(Context),
  }
}

type ProviderComponent<A extends Contexts> = React.FunctionComponent<CombinedProps<A>>
type ConsumerComponent<A extends Contexts> = React.FunctionComponent<CombinedRenderProps<A>>

function combineProviders<A extends Contexts>(
  keys: Array<keyof A>,
  contexts: A,
): ProviderComponent<A> {
  return withMemo(function Provider({ children, ...combinedProps }: any) {
    return keys.reduce((tree, key) => {
      const Component = contexts[key]
      const props = combinedProps[key as keyof typeof combinedProps]

      return React.createElement(Component.Provider, { ...props, key }, tree)
    }, children)
  })
}

function combineConsumers<A extends Contexts>(
  keys: Array<keyof A>,
  contexts: A,
): ConsumerComponent<A> {
  return withMemo(function CombinedConsumer({ children }: any) {
    return keys.reduce(
      (tree, key) => (values: any) => {
        const Consumer = contexts[key].Consumer

        return React.createElement(Consumer, { key: String(key) } as any, (value: any) =>
          tree({ ...values, [key]: value }),
        )
      },
      (value: any) => children(value),
    )({} as any)
  })
}
