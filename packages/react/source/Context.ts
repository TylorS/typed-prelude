import { Overwrite } from '@typed/objects'
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

  function Provider(props: Overwrite<A, { children: React.ReactNode }>) {
    return React.createElement(Container as any, props as any, (value: B) =>
      React.createElement(Context.Provider, { value }, props.children),
    )
  }

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

  function Provider({
    children,
    ...providerProps
  }: Overwrite<CombinedProps<A>, { children: React.ReactNode }>) {
    return React.createElement(
      Providers,
      providerProps as any,
      React.createElement(Consumers, null, (value: CombinedRenderProps<A>) =>
        React.createElement(Context.Provider, { value }, children),
      ),
    )
  }

  return {
    Provider,
    Consumer: Context.Consumer,
    useContext: () => React.useContext(Context),
  }
}

type ProviderComponent<A extends Contexts> = React.FunctionComponent<
  Overwrite<CombinedProps<A>, { children: React.ReactNode }>
>

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
