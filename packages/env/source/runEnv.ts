import { Disposable } from '@typed/disposable'
import { curry } from '@typed/lambda'
import { Env } from './Env'
import { Resume } from './Resume'

export const runEnv = curry(
  <A extends {}, B>(fn: (value: B) => Disposable, resources: A, env: Env<A, B>): Disposable =>
    Resume.run(fn, env(resources)),
) as {
  <A extends {}, B>(fn: (value: B) => Disposable, resources: A, env: Env<A, B>): Disposable
  <A extends {}, B>(fn: (value: B) => Disposable, resources: A): (env: Env<A, B>) => Disposable
  <B>(fn: (value: B) => Disposable): {
    <A extends {}>(resources: A, env: Env<A, B>): Disposable
    <A extends {}>(resources: A): (env: Env<A, B>) => Disposable
  }
}
