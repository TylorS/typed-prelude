import { Effects } from '@typed/effects'

// A channel allows one to communicate across boundaries
// It is a simple object that is used looked up by reference
export interface Channel<E, A> {
  readonly defaultValue: () => Effects<E, A>
}

export type ChannelEnv<A> = A extends Channel<infer R, any> ? R : never
export type ChannelValue<A> = A extends Channel<any, infer R> ? R : never
