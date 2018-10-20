import * as React from 'react'
import { equals } from '../logic'

export class OnChange<A> extends React.Component<OnChangeProps<A>> {
  public componentWillReceiveProps({ value }: OnChangeProps<A>) {
    if (!equals(this.props.value, value)) {
      this.props.onChange(value)
    }
  }
}

export type OnChangeProps<A> = { value: A; onChange: (value: A) => void }
