import * as React from 'react'
import { curry } from '../lambda'

export const asyncSetState: {
  <A extends React.Component>(component: A, state: Partial<A['state']>): Promise<void>
  <A extends React.Component>(component: A): (state: Partial<A['state']>) => Promise<void>
} = curry(
  <A extends React.Component>(component: A, state: Partial<A['state']>): Promise<void> =>
    new Promise<void>(resolve => component.setState(state, resolve)),
)
