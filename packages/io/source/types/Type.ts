import * as D from '../decoder'
import * as E from '../encoder'
import * as G from '../guard'

// TODO: introduce context environments for better error messages with compound types
export interface Type<I = any, O = I> extends G.Guard<I>, D.Decoder<I>, E.Encoder<I, O> {
  readonly name: string
}

export type TypeOf<A> = Type.Of<A>

export namespace Type {
  export type Of<A> = G.TypeOf<A>
  export type Encoding<A> = E.OutputOf<A>

  export const fromGuard = <A>(
    guard: G.Guard<A>,
    name: string,
    expected: string = name,
  ): Type<A> => ({
    ...guard,
    ...D.Decoder.fromGuard(guard, expected),
    ...E.Encoder.id<A>(),
    name,
  })
}

export interface Any extends Type<any, any> {}
export const Any: Any = Type.fromGuard({ is: (_): _ is any => true }, `Any`, `any`)
