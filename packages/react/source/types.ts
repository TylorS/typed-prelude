import { Overwrite } from '@typed/objects'
import * as React from 'react'

export type ContainerComponent<A extends {}, B> = React.FunctionComponent<ContainerProps<A, B>>
export type ContainerProps<A extends {}, B> = DropChildren<A> & {
  children: (renderProps: B) => React.ReactNode
}

export type DropChildren<A> = Pick<A, Exclude<keyof A, 'children'>>

export type ContextComponent<A extends {}, B> = {
  readonly Provider: React.ComponentType<Overwrite<A, { children: React.ReactNode }>>
  readonly Consumer: React.Consumer<B>

  readonly useContext: () => B
}

export type PropsOf<A> = A extends ContextComponent<infer R, any>
  ? R
  : A extends ContainerComponent<infer R, any>
  ? R
  : A extends React.ComponentType<infer R>
  ? DropChildren<R>
  : never

export type RenderPropsOf<A> = A extends ContextComponent<any, infer R>
  ? R
  : A extends ContainerComponent<any, infer R>
  ? R
  : A extends React.ComponentType<infer R>
  ? R extends Readonly<{ children: (props: infer P) => React.ReactNode }>
    ? P
    : never
  : never

export type Contexts = Record<string, ContextComponent<any, any>>
export type CombinedProps<A extends Contexts> = { readonly [K in keyof A]: PropsOf<A[K]> }
export type CombinedRenderProps<A extends Contexts> = {
  readonly [K in keyof A]: RenderPropsOf<A[K]>
}

export type CombinedContext<A extends Contexts> = {
  readonly Provider: React.ComponentType<CombinedProps<A>>
  readonly Consumer: React.Consumer<CombinedRenderProps<A>>
  readonly useContext: () => CombinedRenderProps<A>
}
