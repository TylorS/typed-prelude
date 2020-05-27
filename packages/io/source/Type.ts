import { Decoder } from './Decoder'
import { Encoder } from './Encoder'
import { Guard } from './Guard'

// TODO: introduce context environments for better error messages with compound types
export interface Type<Name extends string, A, I = unknown, O = A>
  extends Decoder<I, A>,
    Encoder<A, O>,
    Guard<A> {
  readonly name: Name
}

export type TypeOf<A> = Type.Of<A>

export namespace Type {
  export type Name<A> = A extends Type<infer R, any, any, any> ? R : never
  export type Of<A> = A extends Type<any, infer R, any, any> ? R : never
  export type Input<A> = A extends Type<any, any, infer R, any> ? R : never
  export type Output<A> = A extends Type<any, any, any, infer R> ? R : never
}

export type Mixed<E = never> = Type<string, E, any>
export type Any<E = never> = Type<string, E, any, any>
