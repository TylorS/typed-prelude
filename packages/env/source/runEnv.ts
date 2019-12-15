import { Disposable } from '@typed/disposable/source'
import { curry } from '@typed/lambda/source'
import { Env } from './Env'

export const runEnv = curry(
  <A extends {}, B>(fn: (value: B) => Disposable, resources: A, env: Env<A, B>): Disposable =>
    env.type === 'value' ? fn(env.value) : env.runEnv(fn, resources),
) as {
  <A extends {}, B>(fn: (value: B) => Disposable, resources: A, env: Env<A, B>): Disposable
  <A extends {}, B>(fn: (value: B) => Disposable, resources: A): (env: Env<A, B>) => Disposable
  <B>(fn: (value: B) => Disposable): {
    <A extends {}>(resources: A, env: Env<A, B>): Disposable
    <A extends {}>(resources: A): (env: Env<A, B>) => Disposable
  }
}
