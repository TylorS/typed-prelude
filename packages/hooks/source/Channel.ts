// A channel allows one to communicate across boundaries
// It is a simple object that is used looked up by reference
export interface Channel<A> {
  readonly defaultValue: A
}

export type ChannelValue<A> = A extends Channel<infer R> ? R : never
