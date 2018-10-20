import * as React from 'react'
import { equals } from '../logic'
import { Maybe } from '../maybe'
import { asyncSetState } from './asyncSetState'

export class Editable<A> extends React.Component<EditableProps<A>, EditableState<A>> {
  private id: any

  constructor(props: EditableProps<A>) {
    super(props)

    this.state = {
      currentValue: props.defaultValue,
      updatedSuccessfully: false,
    }
  }

  public componentWillReceiveProps({ defaultValue, useNewValue }: EditableProps<A>) {
    const shouldUseNewValue = useNewValue
      ? useNewValue(this.props.defaultValue, defaultValue)
      : true

    if (!equals(this.props.defaultValue, defaultValue) && shouldUseNewValue) {
      this.setState(
        { currentValue: defaultValue, updatedSuccessfully: true },
        this.updatedSuccessfully,
      )
    }
  }

  public render() {
    const { props, state } = this

    const childProps: EditableChildProps<A> = {
      ...state,
      updateValue: this.updateValue,
    }

    return props.children(childProps)
  }

  private updateValue = (value: A) =>
    asyncSetState<Editable<A>>(this, { currentValue: Maybe.of(value) })

  private updatedSuccessfully = () => {
    if (this.id) {
      clearTimeout(this.id)
      this.id = void 0
    }

    this.id = setTimeout(
      () => this.setState({ updatedSuccessfully: false }),
      this.props.updatedTimeout || 3000,
    )
  }
}

export type EditableChildProps<A> = EditableState<A> & {
  updateValue: (value: A) => Promise<void>
}

export type EditableProps<A> = {
  defaultValue: Maybe<A>
  children: (props: EditableChildProps<A>) => React.ReactNode

  useNewValue?: (previous: Maybe<A>, current: Maybe<A>) => boolean
  updatedTimeout?: number
}

export type EditableState<A> = {
  currentValue: Maybe<A>
  updatedSuccessfully: boolean
}
