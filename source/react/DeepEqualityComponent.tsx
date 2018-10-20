import * as React from 'react'
import { equals } from '../logic'

// Use Deep Equality checks on props and state
export class DeepEqualityComponent<A = {}, B = {}, C = any> extends React.Component<A, B, C> {
  public shouldComponentUpdate(nextProps: A, nextState: B) {
    return !equals(this.props, nextProps) || !equals(this.state, nextState)
  }
}
