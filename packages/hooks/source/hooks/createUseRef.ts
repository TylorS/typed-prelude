import { getInitialValue } from '../helpers'
import { CreateHookContext, Hook, InitialValue } from '../types'

export const createUseRef = <A>(_: CreateHookContext, current: InitialValue<A | null> = null) =>
  new UseRef<A>({ current: getInitialValue(current) })

export type MutableRefObject<A> = { current: A | null }

export class UseRef<A> implements Hook<[A | null], MutableRefObject<A>> {
  constructor(private ref: MutableRefObject<A>) {}

  public update = (_?: A | null) => this.ref

  public dispose = () => {
    this.ref.current = null
  }
}
