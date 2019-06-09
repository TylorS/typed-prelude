import { Disposable } from '@typed/disposable'
import { Env, Pure } from '@typed/env'
import { curry } from '@typed/lambda'
import { Component } from 'react'

export const setStatePure: {
  <A>(component: Component<any, A>, state: Partial<A>): Pure<A>
  <A>(component: Component<any, A>): (state: Partial<A>) => Pure<A>
} = curry(__setStatePure)

function __setStatePure<A>(component: Component<any, A>, state: Partial<A>): Pure<A> {
  return Env.create<{}, A>(cb => {
    component.setState({ ...component.state, ...state }, () => cb(component.state))

    return Disposable.None
  })
}
