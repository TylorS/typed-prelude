import { CapabilitiesOf, Env, Pure, ValueOf } from './Env'

export type Provide<E extends Env<any, any>, C extends Partial<CapabilitiesOf<E>>> = [
  keyof Omit<CapabilitiesOf<E>, keyof C>,
] extends [never]
  ? Pure<ValueOf<E>>
  : Env<Omit<CapabilitiesOf<E>, keyof C>, ValueOf<E>>

export function provide<E extends Env<any, any>, C extends Partial<CapabilitiesOf<E>>>(
  env: E,
  capabilities: C,
): Provide<E, C> {
  return ((c1: CapabilitiesOf<Provide<E, C>>) =>
    env({ ...(c1 as {}), ...capabilities })) as Provide<E, C>
}
