import { disposeBoth } from '@most/disposable'
import { currentTime } from '@most/scheduler'
import { Arity2, curry } from '../lambda'
import { combine as combineMaybe, fromJust, isJust, Just, Maybe, Nothing } from '../maybe'
import { Effect, Pure } from './Effect'

export const combine = curry(
  <A, B, C, Resources extends {}>(
    fn: Arity2<A, B, C>,
    a: Effect<A, Resources>,
    b: Effect<B, Resources>,
  ) =>
    Effect.create<C, Resources>((cb, resources) => {
      let aValue: Maybe<A> = Nothing
      let bValue: Maybe<B> = Nothing

      function done() {
        const value = combineMaybe(fn, aValue, bValue)

        if (isJust(value)) {
          const x = fromJust(value)
          const time = currentTime(resources.scheduler)

          cb(x, time)
        }
      }

      return disposeBoth(
        a.runEffect(a => ((aValue = Just.of(a)), done()), resources),
        b.runEffect(b => ((bValue = Just.of(b)), done()), resources),
      )
    }),
) as {
  <A, B, C>(fn: Arity2<A, B, C>, a: Pure<A>, b: Pure<B>): Pure<C>
  <A, B, C>(fn: Arity2<A, B, C>, a: Pure<A>): (b: Pure<B>) => Pure<C>
  <A, B, C>(fn: Arity2<A, B, C>): {
    (a: Pure<A>, b: Pure<B>): Pure<C>
    (a: Pure<A>): (b: Pure<B>) => Pure<C>
  }

  <A, B, C, Resources extends {}>(
    fn: Arity2<A, B, C>,
    a: Effect<A, Resources>,
    b: Effect<B, Resources>,
  ): Effect<C, Resources>

  <A, B, C, Resources extends {}>(fn: Arity2<A, B, C>, a: Effect<A, Resources>): (
    b: Effect<B, Resources>,
  ) => Effect<C, Resources>

  <A, B, C, Resources extends {}>(fn: Arity2<A, B, C>): {
    (a: Effect<A, Resources>, b: Effect<B, Resources>): Effect<C, Resources>
    (a: Effect<A, Resources>): (b: Effect<B, Resources>) => Effect<C, Resources>
  }
}
