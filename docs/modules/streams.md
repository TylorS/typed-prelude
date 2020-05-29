[Typed - v3.4.1](../README.md) › [Globals](../globals.md) › [streams](streams.md)

# Package: streams

# @typed/streams

> An official integration with [@most/core](https://github.com/mostjs/core) and Typed :heart:

## Index

### Interfaces

* [StreamChannel](../interfaces/streams.streamchannel.md)

### Type aliases

* [Component](streams.md#component)
* [IOComponent](streams.md#iocomponent)
* [Run](streams.md#run)
* [SchedulerEnv](streams.md#schedulerenv)
* [Sinks](streams.md#sinks)
* [Sources](streams.md#sources)
* [StreamRef](streams.md#streamref)
* [StreamState](streams.md#streamstate)

### Variables

* [toNothing](streams.md#const-tonothing)

### Functions

* [createProxySinks](streams.md#createproxysinks)
* [createStreamChannel](streams.md#createstreamchannel)
* [disposeSources](streams.md#disposesources)
* [filterMaybes](streams.md#filtermaybes)
* [isDisposable](streams.md#isdisposable)
* [replicateSinks](streams.md#replicatesinks)
* [run](streams.md#run)
* [splitEither](streams.md#spliteither)
* [useEventSink](streams.md#useeventsink)
* [useRunStream](streams.md#userunstream)
* [useStreamChannel](streams.md#usestreamchannel)
* [useStreamChannelSink](streams.md#usestreamchannelsink)
* [useStreamEvents](streams.md#usestreamevents)
* [useStreamRef](streams.md#usestreamref)
* [useStreamState](streams.md#usestreamstate)

## Type aliases

###  Component

Ƭ **Component**: *[Arity1](lambda.md#arity1)‹A, B›*

*Defined in [packages/streams/source/run/types.ts:7](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/streams/source/run/types.ts#L7)*

___

###  IOComponent

Ƭ **IOComponent**: *[Arity1](lambda.md#arity1)‹A, keyof [B, Disposable]›*

*Defined in [packages/streams/source/run/types.ts:8](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/streams/source/run/types.ts#L8)*

___

###  Run

Ƭ **Run**: *keyof [A, B, Disposable]*

*Defined in [packages/streams/source/run/types.ts:10](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/streams/source/run/types.ts#L10)*

___

###  SchedulerEnv

Ƭ **SchedulerEnv**: *object*

*Defined in [packages/streams/source/SchedulerEnv.ts:3](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/streams/source/SchedulerEnv.ts#L3)*

#### Type declaration:

* **scheduler**: *Scheduler*

___

###  Sinks

Ƭ **Sinks**: *Readonly‹[Record](io.md#const-record)‹PropertyKey, Stream‹any›››*

*Defined in [packages/streams/source/run/types.ts:5](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/streams/source/run/types.ts#L5)*

___

###  Sources

Ƭ **Sources**: *Readonly‹[Record](io.md#const-record)‹PropertyKey, any››*

*Defined in [packages/streams/source/run/types.ts:4](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/streams/source/run/types.ts#L4)*

___

###  StreamRef

Ƭ **StreamRef**: *object*

*Defined in [packages/streams/source/hooks/useStreamRef.ts:7](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/streams/source/hooks/useStreamRef.ts#L7)*

#### Type declaration:

* **clearError**(): *function*

  * (): *void*

* **error**: *Readonly‹[Ref](hooks.md#ref)‹[Error](../classes/effects.killerror.md#static-error)››*

* **value**: *Readonly‹[Ref](hooks.md#ref)‹A››*

___

###  StreamState

Ƭ **StreamState**: *object*

*Defined in [packages/streams/source/hooks/useStreamState.ts:10](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/streams/source/hooks/useStreamState.ts#L10)*

#### Type declaration:

* **clearError**(): *function*

  * (): *[PureEffect](effects.md#pureeffect)‹[Maybe](io.md#const-maybe)‹[Error](../classes/effects.killerror.md#static-error)››*

* **error**: *[Maybe](io.md#const-maybe)‹[Error](../classes/effects.killerror.md#static-error)›*

* **value**: *A*

## Variables

### `Const` toNothing

• **toNothing**: *function* = InitialState.of(Nothing)

*Defined in [packages/streams/source/hooks/useStreamState.ts:8](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/streams/source/hooks/useStreamState.ts#L8)*

#### Type declaration:

▸ (): *Effects‹E, A›*

## Functions

###  createProxySinks

▸ **createProxySinks**<**A**>(`sinks`: [Record](io.md#const-record)‹keyof Sinks, Subject‹any, any››, `endSignal`: Stream‹void›): *A*

*Defined in [packages/streams/source/run/createProxySinks.ts:6](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/streams/source/run/createProxySinks.ts#L6)*

**Type parameters:**

▪ **A**: *[Sinks](streams.md#sinks)*

**Parameters:**

Name | Type |
------ | ------ |
`sinks` | [Record](io.md#const-record)‹keyof Sinks, Subject‹any, any›› |
`endSignal` | Stream‹void› |

**Returns:** *A*

___

###  createStreamChannel

▸ **createStreamChannel**<**A**>(): *[StreamChannel](../interfaces/streams.streamchannel.md)‹unknown, A, A›*

*Defined in [packages/streams/source/hooks/useStreamChannel.ts:11](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/streams/source/hooks/useStreamChannel.ts#L11)*

Create a basic StreamChannel backed by most-subject.

**Type parameters:**

▪ **A**

**Returns:** *[StreamChannel](../interfaces/streams.streamchannel.md)‹unknown, A, A›*

▸ **createStreamChannel**<**A**, **B**>(`fn`: [Arity1](lambda.md#arity1)‹Stream‹A›, Stream‹B››): *[StreamChannel](../interfaces/streams.streamchannel.md)‹unknown, A, B›*

*Defined in [packages/streams/source/hooks/useStreamChannel.ts:12](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/streams/source/hooks/useStreamChannel.ts#L12)*

Create a basic StreamChannel backed by most-subject.

**Type parameters:**

▪ **A**

▪ **B**

**Parameters:**

Name | Type |
------ | ------ |
`fn` | [Arity1](lambda.md#arity1)‹Stream‹A›, Stream‹B›› |

**Returns:** *[StreamChannel](../interfaces/streams.streamchannel.md)‹unknown, A, B›*

___

###  disposeSources

▸ **disposeSources**<**A**>(`sources`: A): *void*

*Defined in [packages/streams/source/run/disposeSources.ts:4](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/streams/source/run/disposeSources.ts#L4)*

**Type parameters:**

▪ **A**: *[Sources](streams.md#sources)*

**Parameters:**

Name | Type |
------ | ------ |
`sources` | A |

**Returns:** *void*

___

###  filterMaybes

▸ **filterMaybes**<**A**>(`stream`: Stream‹[Maybe](io.md#const-maybe)‹A››): *Stream‹A›*

*Defined in [packages/streams/source/filterMaybes.ts:5](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/streams/source/filterMaybes.ts#L5)*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`stream` | Stream‹[Maybe](io.md#const-maybe)‹A›› |

**Returns:** *Stream‹A›*

___

###  isDisposable

▸ **isDisposable**(`x`: any): *x is Disposable*

*Defined in [packages/streams/source/run/disposeSources.ts:14](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/streams/source/run/disposeSources.ts#L14)*

**Parameters:**

Name | Type |
------ | ------ |
`x` | any |

**Returns:** *x is Disposable*

___

###  replicateSinks

▸ **replicateSinks**<**A**>(`sinks`: A, `sinkProxies`: [Record](io.md#const-record)‹keyof A, Subject‹any, any››, `scheduler`: Scheduler): *Disposable*

*Defined in [packages/streams/source/run/replicateSinks.ts:6](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/streams/source/run/replicateSinks.ts#L6)*

**Type parameters:**

▪ **A**: *[Sinks](streams.md#sinks)*

**Parameters:**

Name | Type |
------ | ------ |
`sinks` | A |
`sinkProxies` | [Record](io.md#const-record)‹keyof A, Subject‹any, any›› |
`scheduler` | Scheduler |

**Returns:** *Disposable*

___

###  run

▸ **run**<**A**, **B**>(`main`: [Component](streams.md#component)‹A, B›, `io`: [IOComponent](streams.md#iocomponent)‹B, A›): *Effects‹[SchedulerEnv](streams.md#schedulerenv), [Run](streams.md#run)‹A, B››*

*Defined in [packages/streams/source/run/run.ts:13](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/streams/source/run/run.ts#L13)*

**Type parameters:**

▪ **A**: *[Sources](streams.md#sources)*

▪ **B**: *[Sinks](streams.md#sinks)*

**Parameters:**

Name | Type |
------ | ------ |
`main` | [Component](streams.md#component)‹A, B› |
`io` | [IOComponent](streams.md#iocomponent)‹B, A› |

**Returns:** *Effects‹[SchedulerEnv](streams.md#schedulerenv), [Run](streams.md#run)‹A, B››*

___

###  splitEither

▸ **splitEither**<**A**, **B**>(`stream`: Stream‹[Either](either.md#either)‹A, B››): *keyof [Stream<A>, Stream<B>]*

*Defined in [packages/streams/source/splitEither.ts:5](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/streams/source/splitEither.ts#L5)*

**Type parameters:**

▪ **A**

▪ **B**

**Parameters:**

Name | Type |
------ | ------ |
`stream` | Stream‹[Either](either.md#either)‹A, B›› |

**Returns:** *keyof [Stream<A>, Stream<B>]*

___

###  useEventSink

▸ **useEventSink**<**A**>(`sink`: Partial‹Sink‹A››): *Generator‹Env‹HookEnv, any›, Sink‹A›, any›*

*Defined in [packages/streams/source/hooks/useStreamEvents.ts:13](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/streams/source/hooks/useStreamEvents.ts#L13)*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`sink` | Partial‹Sink‹A›› |

**Returns:** *Generator‹Env‹HookEnv, any›, Sink‹A›, any›*

___

###  useRunStream

▸ **useRunStream**<**A**>(`stream`: Stream‹A›, `sink`: Sink‹A›): *HookEffects‹[SchedulerEnv](streams.md#schedulerenv) & HooksManagerEnv & [TimerEnv](effects.md#timerenv), Disposable›*

*Defined in [packages/streams/source/hooks/useRunStream.ts:11](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/streams/source/hooks/useRunStream.ts#L11)*

Run a Stream<A> with a given Sink<A> whilst creating a relative scheduler
for each new stream invocation.

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`stream` | Stream‹A› |
`sink` | Sink‹A› |

**Returns:** *HookEffects‹[SchedulerEnv](streams.md#schedulerenv) & HooksManagerEnv & [TimerEnv](effects.md#timerenv), Disposable›*

___

###  useStreamChannel

▸ **useStreamChannel**<**A**, **B**>(`channel`: [StreamChannel](../interfaces/streams.streamchannel.md)‹unknown, A, B›): *ChannelEffects‹HookEnv, Stream‹B››*

*Defined in [packages/streams/source/hooks/useStreamChannel.ts:30](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/streams/source/hooks/useStreamChannel.ts#L30)*

Get the Stream<B> out of a StreamChannel<A, B>

**Type parameters:**

▪ **A**

▪ **B**

**Parameters:**

Name | Type |
------ | ------ |
`channel` | [StreamChannel](../interfaces/streams.streamchannel.md)‹unknown, A, B› |

**Returns:** *ChannelEffects‹HookEnv, Stream‹B››*

___

###  useStreamChannelSink

▸ **useStreamChannelSink**<**A**, **B**>(`channel`: [StreamChannel](../interfaces/streams.streamchannel.md)‹unknown, A, B›): *ChannelEffects‹HookEnv, Sink‹A››*

*Defined in [packages/streams/source/hooks/useStreamChannel.ts:41](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/streams/source/hooks/useStreamChannel.ts#L41)*

Get the Sink<A> out of a StreamChannel<A, B>

**Type parameters:**

▪ **A**

▪ **B**

**Parameters:**

Name | Type |
------ | ------ |
`channel` | [StreamChannel](../interfaces/streams.streamchannel.md)‹unknown, A, B› |

**Returns:** *ChannelEffects‹HookEnv, Sink‹A››*

___

###  useStreamEvents

▸ **useStreamEvents**<**A**>(`stream`: Stream‹A›, `sink`: Partial‹Sink‹A››): *Generator‹Env‹HookEnv & object & HooksManagerEnv & object, any›, Disposable, any›*

*Defined in [packages/streams/source/hooks/useStreamEvents.ts:9](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/streams/source/hooks/useStreamEvents.ts#L9)*

A convenient helper for listening to the values of a stream

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`stream` | Stream‹A› |
`sink` | Partial‹Sink‹A›› |

**Returns:** *Generator‹Env‹HookEnv & object & HooksManagerEnv & object, any›, Disposable, any›*

___

###  useStreamRef

▸ **useStreamRef**<**A**>(`stream`: Stream‹A›): *HookEffects‹[SchedulerEnv](streams.md#schedulerenv) & HooksManagerEnv & [TimerEnv](effects.md#timerenv), [StreamRef](streams.md#streamref)‹A››*

*Defined in [packages/streams/source/hooks/useStreamRef.ts:17](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/streams/source/hooks/useStreamRef.ts#L17)*

Mirrors the latest values of a stream and possible errors into Maybe<A> and Maybe<Error> respectively
backed by readonly references whose contained values will change as soon a the stream does.

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`stream` | Stream‹A› |

**Returns:** *HookEffects‹[SchedulerEnv](streams.md#schedulerenv) & HooksManagerEnv & [TimerEnv](effects.md#timerenv), [StreamRef](streams.md#streamref)‹A››*

___

###  useStreamState

▸ **useStreamState**<**E**, **A**>(`stream`: Stream‹A›, `initial`: [InitialState](hooks.md#initialstate)‹E, A›): *HookEffects‹E & [TimerEnv](effects.md#timerenv) & HooksManagerEnv & [SchedulerEnv](streams.md#schedulerenv), [StreamState](streams.md#streamstate)‹A››*

*Defined in [packages/streams/source/hooks/useStreamState.ts:22](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/streams/source/hooks/useStreamState.ts#L22)*

Mirrors the latest values of a stream and possible errors into A and Maybe<Error> respectively
backed by useState so your HookEnvironment's will be marked as needing an update as the stream
changes. If your component is updating to often, consider using debounce or another time-altering
stream combinators.

**Type parameters:**

▪ **E**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`stream` | Stream‹A› |
`initial` | [InitialState](hooks.md#initialstate)‹E, A› |

**Returns:** *HookEffects‹E & [TimerEnv](effects.md#timerenv) & HooksManagerEnv & [SchedulerEnv](streams.md#schedulerenv), [StreamState](streams.md#streamstate)‹A››*
