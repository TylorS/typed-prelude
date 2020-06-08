import { Is } from '@typed/lambda'
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

export type Mixed = Type<any, any>

export const Any = Type.fromGuard(
  { is: ((...args: [] | [unknown]) => args.length === 1) as Is<any> },
  `Any`,
  `any`,
)

export interface RecursiveType<T extends Type> extends Type<Type.Of<T>, Type.Encoding<T>> {}

export const lazy = <T extends Type>(f: () => T): RecursiveType<T> => recursive<T>(f)

export const recursive = <T extends Type = Type>(f: (type: NoInfer<T>) => T): RecursiveType<T> => {
  let _type: T | null = null

  const type = {
    get name() {
      return getType().name
    },
    is: (u) => getType().is(u),
    decode: (i) => getType().decode(i),
    encode: (a) => getType().encode(a),
  } as T

  function getType(): T {
    if (!_type) {
      _type = f(type)
    }

    return _type!
  }

  return type
}

type NoInfer<T> = [T][T extends any ? 0 : never]
