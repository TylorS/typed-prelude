import { Disposable } from '@typed/disposable'
import { Arity1, IO } from '@typed/lambda'
import { Timer } from '@typed/timer'
import { Channel } from './Channel'

export interface HooksContext extends Disposable {
  readonly state: {
    hasBeenUpdated: boolean
    shouldRerunHooks: boolean
    fn: (...args: any) => any
    fnContext: any
    fnArguments: any
    returnValue: any
    currentId: number
  }

  readonly nextId: () => number
  readonly resetId: () => void
  readonly timer: Timer
  readonly hooks: Map<number, Hook>
  readonly channelValues: WeakMap<Channel, any>
  readonly update: () => void
}

export interface CreateHookContext {
  readonly timer: Timer
  readonly hasBeenUpdated: () => void
  readonly provide: <A>(channel: Channel<A>, value: A) => void
  readonly consume: <A>(channel: Channel<A>) => A
}

export type CreateHook<A extends readonly any[] = any[], B = any> = (
  context: CreateHookContext,
  ...args: A
) => Hook<A, B>

export interface Hook<A extends readonly any[] = any, B = any> extends Disposable {
  readonly update: (...args: A) => B
}

export type InitialValue<A> = IO<A> | A
export type ValueOrUpdate<A> = Arity1<A, A> | A

export type HookArgs<A> = A extends Hook<infer R, any> ? R : never
export type HookValue<A> = A extends Hook<readonly any[], infer R> ? R : never

export type CreateHookArgs<A> = A extends CreateHook ? HookArgs<ReturnType<A>> : never
export type CreateHookValue<A> = A extends CreateHook ? HookValue<ReturnType<A>> : never
