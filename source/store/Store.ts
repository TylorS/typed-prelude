import { Disposable } from '@most/types'
import { Subscriptions } from '../common/Subscriptions'
import { ap, chain, Effect, map } from '../effect'
import { Arity1 } from '../lambda'

export interface Store<A> {
  readonly state: Effect<A>
  readonly undo: Effect<A>
  readonly redo: Effect<A>
  readonly reset: Effect<A>
  readonly update: <Resources>(stateEffect: Effect<Arity1<A, A>, Resources>) => Effect<A, Resources>
  readonly listen: (listener: Arity1<A>) => Disposable
}

export type StoreUpdate<A> = <Resources>(
  stateEffect: UpdateStateEffect<A, Resources>,
) => Effect<A, Resources>
export type UpdateStateEffect<A = any, Resources = {}> = Effect<Arity1<A, A>, Resources>

export const createStore = <A>(defaultState: A, options: TypedStoreOptions = {}): Store<A> =>
  new TypedStore(defaultState, options)

export type TypedStoreOptions = {
  maxUndoSize?: number
  maxRedoSize?: number
}

class TypedStore<A> implements Store<A> {
  public state: Effect<A>
  public undo: Effect<A>
  public redo: Effect<A>
  public reset: Effect<A>
  public options: TypedStoreOptions

  private currentState: A
  private subcriptions: Subscriptions<A>
  private undos: A[] = []
  private redos: A[] = []

  constructor(defaultState: A, options: TypedStoreOptions) {
    this.currentState = defaultState
    this.subcriptions = new Subscriptions()
    this.options = options
    this.state = Effect.fromIO<A>(() => this.currentState)
    this.reset = map(() => {
      this.undos = []
      this.redos = []
      this.currentState = defaultState

      return defaultState
    }, this.subcriptions.pushToSubscribers(defaultState))

    this.undo = chain(
      this.setState,
      Effect.fromIO<A>(() => {
        if (this.undos.length > 0) {
          this.redos.unshift(this.currentState)

          const value = this.undos.pop() as A

          this.cleanupUndoAndRedos()

          return value
        }

        return this.currentState
      }),
    )

    this.redo = chain(
      this.setState,
      Effect.fromIO<A>(() => {
        if (this.redos.length > 0) {
          this.undos.push(this.currentState)

          const value = this.redos.shift() as A

          this.cleanupUndoAndRedos()

          return value
        }

        return this.currentState
      }),
    )
  }

  public update = <Resources extends {}>(
    stateEffect: Effect<Arity1<A, A>, Resources>,
  ): Effect<A, Resources> => chain(x => this.setState(x, true), ap(stateEffect, this.state))

  public listen = (listener: Arity1<A>): Disposable => this.subcriptions.addSubsciber(listener)

  private setState = (state: A, pushUndo: boolean = false): Effect<A> =>
    map(() => {
      if (pushUndo) {
        this.undos.push(this.currentState)
        this.cleanupUndoAndRedos()
      }

      this.currentState = state

      return state
    }, this.subcriptions.pushToSubscribers(state))

  private cleanupUndoAndRedos = () => {
    const {
      options: { maxRedoSize, maxUndoSize },
      redos,
      undos,
    } = this

    if (maxRedoSize && redos.length > maxRedoSize) {
      this.redos.splice(maxRedoSize)
    }

    if (maxUndoSize && undos.length >= maxUndoSize) {
      this.undos.splice(0, this.undos.length - maxUndoSize)
    }
  }
}
