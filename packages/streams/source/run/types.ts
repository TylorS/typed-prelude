import { Disposable, Scheduler, Stream } from '@most/types'
import { Arity1 } from '@typed/lambda'

export type SchedulerEnv = { readonly scheduler: Scheduler }

export type Sources = Readonly<Record<PropertyKey, any>>
export type Sinks = Readonly<Record<PropertyKey, Stream<any>>>

export type Component<A extends Sources, B extends Sinks> = Arity1<A, B>
export type IOComponent<A extends Sinks, B extends Sources> = Arity1<A, readonly [B, Disposable]>

export type Run<A extends Sources, B extends Sinks> = readonly [A, B]
