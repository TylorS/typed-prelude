import { Head, Tail } from '@typed/lambda'
import { Lens, LensInput, LensOutput } from './Lens'
import { PathLens } from './PathLens'
import { pipe2 } from './pipe2'
import { PropLens } from './PropLens'

type Lenses = readonly [Lens<any, any>, Lens<any, any>, ...ReadonlyArray<Lens<any, any>>]

export type PipeLenses<A extends Lenses> = A extends ReadonlyArray<PropLens<any>>
  ? PathLens<GetPropKeys<A>>
  : GetPipedLenses<LensInput<Head<A>>, LensOutput<Head<A>>, Tail<A>>

type GetPropKeys<A extends Lenses> = {
  [K in keyof A]: A[K] extends PropLens<infer R> ? R : never
}

export function pipe<A extends Lenses>(...lenses: A): PipeLenses<A> {
  return lenses.reduce(pipe2, Lens.id()) as PipeLenses<A>
}

type GetPipedLenses<I, O, Lenses extends ReadonlyArray<Lens<any, any>>> = Lens<
  I,
  VerifyLensesAreValidAndGetOutput<O, Lenses>
>

type VerifyLensesAreValidAndGetOutput<O, A extends ReadonlyArray<Lens<any, any>>> = {
  complete: O extends LensInput<Head<A>>
    ? LensOutput<Head<A>>
    : {
        error: 'Invalid Lens composition'
        from: O
        to: LensInput<Head<A>>
      }
  continue: O extends LensInput<Head<A>>
    ? VerifyLensesAreValidAndGetOutput<LensOutput<Head<A>>, Tail<A>>
    : {
        error: 'Invalid Lens composition'
        from: O
        to: LensInput<Head<A>>
      }
}[Tail<A> extends [] ? 'complete' : 'continue']
