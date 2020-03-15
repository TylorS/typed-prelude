import { always, IO, pipe } from '@typed/lambda'
import { Computation, Env, op, Pure, resumeLater, resumeNow, uncancelable } from 'fx-ts'

export type PureEffect<A> = Computation<Pure<any>, A, any>
export type Effect<E, A> = Computation<Env<E, any>, A, any>
export type Effects<E, A> = Computation<Env<E, any> | Pure<any>, A, any>

export type EffectGenerator<E, A> = Generator<Env<E, any>, A, any>
export type EffectsGenerator<E, A> = Generator<Env<E, any> | Pure<any>, A, any>

const toUncancelable = always(uncancelable)

export namespace Effect {
  export const of = <A>(value: A): Computation<Pure<A>, A, A> => op(_ => resumeNow(value))

  export const fromIO = <A>(io: IO<A>): Computation<Pure<A>, A, A> =>
    op(_ => resumeLater(pipe(io, toUncancelable)))
}
