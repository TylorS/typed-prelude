import { CreateHookContext, Hook } from '../types'

export const createUseRef = <A>(_: CreateHookContext, current: A | null = null) =>
  new UseRef<A>({ current })

export type MutableRefObject<A> = { current: A | null }

export class UseRef<A> implements Hook<[A | null], MutableRefObject<A>> {
  constructor(private ref: MutableRefObject<A>) {}

  public update = (_?: A | null) => this.ref

  public dispose = () => {
    this.ref.current = null
  }
}
