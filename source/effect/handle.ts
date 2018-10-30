import { curry } from '../lambda'
import { DropKeys } from '../objects'
import { Effect, EffectResources, Pure } from './Effect'

export type Handle<A extends Effect<any, any>, B extends {}> = A extends Effect<infer C, infer D>
  ? Exclude<keyof D | 'scheduler', keyof B> extends never
    ? Pure<C>
    : Effect<C, DropKeys<D, keyof B>>
  : never

export const handle = curry(
  <Resources extends {}, A, B extends {}>(
    defaultResources: Resources,
    effect: Effect<A, B>,
  ): Handle<Effect<A, B>, Resources> =>
    Effect.create<A, DropKeys<B, keyof Resources>>((cb, resources) =>
      effect.runEffect(cb, (Object.assign(
        {},
        defaultResources,
        resources,
      ) as any) as EffectResources<B>),
    ) as Handle<Effect<A, B>, Resources>,
) as {
  <Resources extends {}, A, B extends {}>(
    defaultResources: Resources,
    effect: Effect<A, B>,
  ): Handle<Effect<A, B>, Resources>

  <Resources extends {}>(defaultResources: Resources): <A, B extends {}>(
    effect: Effect<A, B>,
  ) => Handle<Effect<A, B>, Resources>
}
