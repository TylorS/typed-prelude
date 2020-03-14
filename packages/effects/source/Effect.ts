import { always, IO, pipe } from '@typed/lambda'
import { Computation, Env, op, Pure, resumeLater, resumeNow, uncancelable } from 'fx-ts'

export type Effect<E, A> = Computation<Env<E, unknown>, A, unknown>
export type Effects<E, A> = Computation<Env<E, unknown> | Pure<unknown>, A, unknown>

const toUncancelable = always(uncancelable)

export namespace Effect {
  export const of = <A>(value: A): Computation<Pure<A>, A, A> => op(_ => resumeNow(value))

  export const fromIO = <A>(io: IO<A>): Computation<Pure<A>, A, A> =>
    op(_ => resumeLater(pipe(io, toUncancelable)))
}
