import { EmptyObject } from '@typed/common/source'
import { CapabilitiesOf, Env, Pure } from './Env'

export type Provide<E, C> = E extends Env<infer C1, infer R>
  ? ProvideEnv<C, C1, R>
  : E extends Pure<any>
  ? E
  : never

export function provide<E extends Env<any, any>, C>(env: E, capabilities: C): Provide<E, C> {
  return ((c1: CapabilitiesOf<Provide<E, C>>) => env({ ...c1, ...capabilities })) as Provide<E, C>
}

type ProvideEnv<C, C1, A> = IsEmptyObject<C> extends true
  ? Env<C1, A>
  : IsExtension<C, C1> extends true
  ? Pure<A>
  : Env<Omit<C1, keyof C>, A>

type IsEmptyObject<A> = Equals<A, {}> extends true
  ? true
  : Equals<A, EmptyObject> extends true
  ? true
  : false

type IsExtension<A, B> = Equals<A, B> extends true ? true : A extends B ? true : false

type Equals<A1, A2> = (<A>() => A extends A1 ? true : false) extends <A>() => A extends A2
  ? true
  : false
  ? true
  : false
