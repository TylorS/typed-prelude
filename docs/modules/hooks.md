[Typed - v3.4.1](../README.md) › [Globals](../globals.md) › [hooks](hooks.md)

# Package: hooks

# @typed/hooks 

A self-organizing event-based hooks implementation built using [`@typed/effects`](./effects) to decouple 
managing state from any framework in a way that you can still test. 

Through hooking into the event's exposed by our environment type `HooksManagerEnv`, one can build many unique reactive abstractions. 
For example [`@typed/render`](./render) uses this system to provide a self-patching render tree and [`@typed/html`](./html) which does 
quite the same with our own custom virtual-dom that's effect-aware.

## Index

### Namespaces

* [InitialState](hooks.md#initialstate)

### Enumerations

* [HookEnvironmentEventType](../enums/hooks.hookenvironmenteventtype.md)

### Interfaces

* [Channel](../interfaces/hooks.channel.md)
* [ChannelEffects](../interfaces/hooks.channeleffects.md)
* [HookEffects](../interfaces/hooks.hookeffects.md)
* [HookEnv](../interfaces/hooks.hookenv.md)
* [HookEnvironment](../interfaces/hooks.hookenvironment.md)
* [HooksManager](../interfaces/hooks.hooksmanager.md)
* [HooksManagerEnv](../interfaces/hooks.hooksmanagerenv.md)

### Type aliases

* [ChannelEnv](hooks.md#channelenv)
* [ChannelManager](hooks.md#channelmanager)
* [ChannelValue](hooks.md#channelvalue)
* [HookEnvironmentEvent](hooks.md#hookenvironmentevent)
* [Ref](hooks.md#ref)
* [RemoteDataActions](hooks.md#remotedataactions)
* [TreeManager](hooks.md#treemanager)
* [UseChannelState](hooks.md#usechannelstate)
* [UseChannelStateOptions](hooks.md#usechannelstateoptions)
* [UseLenses](hooks.md#uselenses)
* [UseRef](hooks.md#useref)
* [UseState](hooks.md#usestate)

### Variables

* [TimerChannel](hooks.md#const-timerchannel)
* [empty](hooks.md#const-empty)
* [emptyMap](hooks.md#const-emptymap)
* [emptySet](hooks.md#const-emptyset)
* [toNull](hooks.md#const-tonull)

### Functions

* [call](hooks.md#const-call)
* [createChannel](hooks.md#createchannel)
* [createChannelManager](hooks.md#createchannelmanager)
* [createDispatch](hooks.md#createdispatch)
* [createDispatch](hooks.md#createdispatch)
* [createHookEnvironment](hooks.md#createhookenvironment)
* [createHooksManager](hooks.md#createhooksmanager)
* [createHooksManagerEnv](hooks.md#createhooksmanagerenv)
* [createIdGenerator](hooks.md#createidgenerator)
* [createTestHookEnvironment](hooks.md#createtesthookenvironment)
* [createTreeManager](hooks.md#createtreemanager)
* [createUpdateManager](hooks.md#createupdatemanager)
* [didRefChange](hooks.md#didrefchange)
* [getEnvironmentByKey](hooks.md#const-getenvironmentbykey)
* [getHookEnv](hooks.md#gethookenv)
* [manageValue](hooks.md#managevalue)
* [manageValues](hooks.md#managevalues)
* [provideChannel](hooks.md#providechannel)
* [runWithHooks](hooks.md#runwithhooks)
* [useCallback](hooks.md#usecallback)
* [useChannel](hooks.md#usechannel)
* [useChannelState](hooks.md#usechannelstate)
* [useChannelValue](hooks.md#const-usechannelvalue)
* [useDepChange](hooks.md#usedepchange)
* [useEffect](hooks.md#useeffect)
* [useEffectBy](hooks.md#useeffectby)
* [useEffectOnce](hooks.md#useeffectonce)
* [useLens](hooks.md#uselens)
* [useLenses](hooks.md#uselenses)
* [useMapChannel](hooks.md#usemapchannel)
* [useMatches](hooks.md#usematches)
* [useMemo](hooks.md#usememo)
* [useMemoEffect](hooks.md#usememoeffect)
* [useReduceChannel](hooks.md#usereducechannel)
* [useReducer](hooks.md#usereducer)
* [useRef](hooks.md#useref)
* [useRemoteData](hooks.md#useremotedata)
* [useRouter](hooks.md#userouter)
* [useState](hooks.md#usestate)
* [useTimer](hooks.md#usetimer)

## Namespaces

###  InitialState

• **InitialState**: *function*

*Defined in [packages/hooks/source/types.ts:100](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/hooks/source/types.ts#L100)*

*Defined in [packages/hooks/source/types.ts:102](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/hooks/source/types.ts#L102)*

#### Type declaration:

▸ (): *Effects‹E, A›*

### `Const` fromIO

▸ **fromIO**<**A**>(`io`: function): *[InitialState](hooks.md#initialstate)‹unknown, A›*

*Defined in [packages/hooks/source/types.ts:104](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/hooks/source/types.ts#L104)*

**Type parameters:**

▪ **A**

**Parameters:**

▪ **io**: *function*

▸ (): *A*

**Returns:** *[InitialState](hooks.md#initialstate)‹unknown, A›*

### `Const` of

▸ **of**<**A**>(`value`: A): *[InitialState](hooks.md#initialstate)‹unknown, A›*

*Defined in [packages/hooks/source/types.ts:103](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/hooks/source/types.ts#L103)*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`value` | A |

**Returns:** *[InitialState](hooks.md#initialstate)‹unknown, A›*

## Type aliases

###  ChannelEnv

Ƭ **ChannelEnv**: *A extends Channel<infer R, any> ? R : never*

*Defined in [packages/hooks/source/Channel.ts:9](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/hooks/source/Channel.ts#L9)*

___

###  ChannelManager

Ƭ **ChannelManager**: *object*

*Defined in [packages/hooks/source/createChannelManager.ts:7](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/hooks/source/createChannelManager.ts#L7)*

#### Type declaration:

* **useChannelState**(): *function*

  * <**E**, **B**, **C**>(`options`: [UseChannelStateOptions](hooks.md#usechannelstateoptions)‹E, B, C›, `node`: A): *[ChannelEffects](../interfaces/hooks.channeleffects.md)‹E, [UseChannelState](hooks.md#usechannelstate)‹E, B, C››*

___

###  ChannelValue

Ƭ **ChannelValue**: *A extends Channel<any, infer R> ? R : never*

*Defined in [packages/hooks/source/Channel.ts:10](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/hooks/source/Channel.ts#L10)*

___

###  HookEnvironmentEvent

Ƭ **HookEnvironmentEvent**: *[Tuple](tuple.md#tuple)‹[Created](../enums/hooks.hookenvironmenteventtype.md#created), object› | [Tuple](tuple.md#tuple)‹[Updated](../enums/hooks.hookenvironmenteventtype.md#updated), object› | [Tuple](tuple.md#tuple)‹[Removed](../enums/hooks.hookenvironmenteventtype.md#removed), [HookEnvironment](../interfaces/hooks.hookenvironment.md)›*

*Defined in [packages/hooks/source/types.ts:18](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/hooks/source/types.ts#L18)*

___

###  Ref

Ƭ **Ref**: *object*

*Defined in [packages/hooks/source/types.ts:111](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/hooks/source/types.ts#L111)*

#### Type declaration:

* **current**: *[Maybe](io.md#const-maybe)‹A›*

___

###  RemoteDataActions

Ƭ **RemoteDataActions**: *object*

*Defined in [packages/hooks/source/useRemoteData.ts:8](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/hooks/source/useRemoteData.ts#L8)*

#### Type declaration:

* **clear**(): *function*

  * (): *[PureEffect](effects.md#pureeffect)‹[RemoteData](remote_data.md#remotedata)‹A, B››*

* **failure**(): *function*

  * (`value`: A): *[PureEffect](effects.md#pureeffect)‹[RemoteData](remote_data.md#remotedata)‹A, B››*

* **loading**(): *function*

  * (): *[PureEffect](effects.md#pureeffect)‹[RemoteData](remote_data.md#remotedata)‹A, B››*

* **set**(): *function*

  * (`remoteData`: [RemoteData](remote_data.md#remotedata)‹A, B›): *[PureEffect](effects.md#pureeffect)‹[RemoteData](remote_data.md#remotedata)‹A, B››*

* **success**(): *function*

  * (`value`: B): *[PureEffect](effects.md#pureeffect)‹[RemoteData](remote_data.md#remotedata)‹A, B››*

* **update**(): *function*

  * (`updateFn`: [Arity1](lambda.md#arity1)‹[RemoteData](remote_data.md#remotedata)‹A, B›, [RemoteData](remote_data.md#remotedata)‹A, B››): *[PureEffect](effects.md#pureeffect)‹[RemoteData](remote_data.md#remotedata)‹A, B››*

___

###  TreeManager

Ƭ **TreeManager**: *object*

*Defined in [packages/hooks/source/createTreeManager.ts:108](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/hooks/source/createTreeManager.ts#L108)*

#### Type declaration:

* **getAllAncestors**(): *function*

  * (`node`: A): *Generator‹A, void, any›*

* **getAllDescendants**(): *function*

  * (`providers`: WeakSet‹A›, `consumers`: WeakMap‹A, any›, `node`: A): *Generator‹A, void, any›*

* **getChildren**(): *function*

  * (`node`: A): *[Set](../interfaces/objects.mutableset.md#set)‹A› | undefined*

* **getParent**(): *function*

  * (`node`: A): *A | undefined*

* **removeNode**(): *function*

  * (`node`: A): *[PureEffect](effects.md#pureeffect)‹void›*

* **setParent**(): *function*

  * (`child`: A, `parent`: A): *[PureEffect](effects.md#pureeffect)‹void›*

___

###  UseChannelState

Ƭ **UseChannelState**: *keyof [IO<ChannelEffects<E, B>>, function]*

*Defined in [packages/hooks/source/types.ts:76](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/hooks/source/types.ts#L76)*

___

###  UseChannelStateOptions

Ƭ **UseChannelStateOptions**: *object*

*Defined in [packages/hooks/source/types.ts:70](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/hooks/source/types.ts#L70)*

#### Type declaration:

* **channel**: *[Channel](../interfaces/hooks.channel.md)‹E, A›*

* **initialState**? : *[InitialState](hooks.md#initialstate)‹E, A›*

* **selector**? : *[Arity1](lambda.md#arity1)‹A, B›*

___

###  UseLenses

Ƭ **UseLenses**: *object*

*Defined in [packages/hooks/source/useLens.ts:40](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/hooks/source/useLens.ts#L40)*

#### Type declaration:

___

###  UseRef

Ƭ **UseRef**: *keyof [Ref<A>, Arity1<A | undefined | void | null, void>]*

*Defined in [packages/hooks/source/types.ts:110](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/hooks/source/types.ts#L110)*

___

###  UseState

Ƭ **UseState**: *keyof [IO<PureEffect<A>>, function]*

*Defined in [packages/hooks/source/types.ts:108](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/hooks/source/types.ts#L108)*

## Variables

### `Const` TimerChannel

• **TimerChannel**: *[Channel](../interfaces/hooks.channel.md)‹[TimerEnv](effects.md#timerenv), Timer›* = createChannel<TimerEnv, Timer>(function* () {
  const { timer } = yield* get<TimerEnv>()

  return timer
})

*Defined in [packages/hooks/source/TimerChannel.ts:6](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/hooks/source/TimerChannel.ts#L6)*

___

### `Const` empty

• **empty**: *[]* = []

*Defined in [packages/hooks/source/useEffect.ts:10](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/hooks/source/useEffect.ts#L10)*

___

### `Const` emptyMap

• **emptyMap**: *WeakMap‹object, any›* = new WeakMap()

*Defined in [packages/hooks/source/createHooksManager.ts:15](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/hooks/source/createHooksManager.ts#L15)*

___

### `Const` emptySet

• **emptySet**: *WeakSet‹object›* = new WeakSet()

*Defined in [packages/hooks/source/createHooksManager.ts:14](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/hooks/source/createHooksManager.ts#L14)*

___

### `Const` toNull

• **toNull**: *function* = InitialState.of(null)

*Defined in [packages/hooks/source/createHookEnvironment.ts:18](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/hooks/source/createHookEnvironment.ts#L18)*

#### Type declaration:

▸ (): *Effects‹E, A›*

## Functions

### `Const` call

▸ **call**<**A**, **B**>(`value`: A, `match`: Match‹A, B›): *Nothing | Just‹B›*

*Defined in [packages/hooks/source/useMatches.ts:17](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/hooks/source/useMatches.ts#L17)*

**Type parameters:**

▪ **A**

▪ **B**

**Parameters:**

Name | Type |
------ | ------ |
`value` | A |
`match` | Match‹A, B› |

**Returns:** *Nothing | Just‹B›*

___

###  createChannel

▸ **createChannel**<**E**, **A**>(`defaultValue`: function): *[Channel](../interfaces/hooks.channel.md)‹E, A›*

*Defined in [packages/hooks/source/createChannel.ts:4](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/hooks/source/createChannel.ts#L4)*

**Type parameters:**

▪ **E**

▪ **A**

**Parameters:**

▪ **defaultValue**: *function*

▸ (): *Effects‹E, A›*

**Returns:** *[Channel](../interfaces/hooks.channel.md)‹E, A›*

___

###  createChannelManager

▸ **createChannelManager**<**A**>(`setUpdated`: function, `getAllDescendants`: function, `getParent`: function): *[ChannelManager](hooks.md#channelmanager)‹A›*

*Defined in [packages/hooks/source/createChannelManager.ts:16](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/hooks/source/createChannelManager.ts#L16)*

**Type parameters:**

▪ **A**: *object*

**Parameters:**

▪ **setUpdated**: *function*

▸ (`node`: A, `updated`: boolean): *[PureEffect](effects.md#pureeffect)‹void›*

**Parameters:**

Name | Type |
------ | ------ |
`node` | A |
`updated` | boolean |

▪ **getAllDescendants**: *function*

▸ (`providers`: WeakSet‹A›, `consumers`: WeakMap‹A, any›, `node`: A): *Generator‹A, void, any›*

**Parameters:**

Name | Type |
------ | ------ |
`providers` | WeakSet‹A› |
`consumers` | WeakMap‹A, any› |
`node` | A |

▪ **getParent**: *function*

▸ (`node`: A): *A | undefined*

**Parameters:**

Name | Type |
------ | ------ |
`node` | A |

**Returns:** *[ChannelManager](hooks.md#channelmanager)‹A›*

___

###  createDispatch

▸ **createDispatch**<**E**, **A**, **B**>(`reducer`: [Arity2](lambda.md#arity2)‹A, B, A›, `updateState`: function): *(Anonymous function)*

*Defined in [packages/hooks/source/useChannel.ts:79](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/hooks/source/useChannel.ts#L79)*

**Type parameters:**

▪ **E**

▪ **A**

▪ **B**

**Parameters:**

▪ **reducer**: *[Arity2](lambda.md#arity2)‹A, B, A›*

▪ **updateState**: *function*

▸ (`updateFn`: [Arity1](lambda.md#arity1)‹A, A›): *[ChannelEffects](../interfaces/hooks.channeleffects.md)‹E, A›*

**Parameters:**

Name | Type |
------ | ------ |
`updateFn` | [Arity1](lambda.md#arity1)‹A, A› |

**Returns:** *(Anonymous function)*

___

###  createDispatch

▸ **createDispatch**<**A**, **B**>(`reducer`: [Arity2](lambda.md#arity2)‹A, B, A›, `updateState`: function): *(Anonymous function)*

*Defined in [packages/hooks/source/useReducer.ts:21](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/hooks/source/useReducer.ts#L21)*

**Type parameters:**

▪ **A**

▪ **B**

**Parameters:**

▪ **reducer**: *[Arity2](lambda.md#arity2)‹A, B, A›*

▪ **updateState**: *function*

▸ (`updateFn`: [Arity1](lambda.md#arity1)‹A, A›): *[PureEffect](effects.md#pureeffect)‹A›*

**Parameters:**

Name | Type |
------ | ------ |
`updateFn` | [Arity1](lambda.md#arity1)‹A, A› |

**Returns:** *(Anonymous function)*

___

###  createHookEnvironment

▸ **createHookEnvironment**(`manager`: [HooksManager](../interfaces/hooks.hooksmanager.md)): *[HookEnvironment](../interfaces/hooks.hookenvironment.md)*

*Defined in [packages/hooks/source/createHookEnvironment.ts:20](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/hooks/source/createHookEnvironment.ts#L20)*

**Parameters:**

Name | Type |
------ | ------ |
`manager` | [HooksManager](../interfaces/hooks.hooksmanager.md) |

**Returns:** *[HookEnvironment](../interfaces/hooks.hookenvironment.md)*

___

###  createHooksManager

▸ **createHooksManager**(`uuidEnv`: UuidEnv): *[HooksManager](../interfaces/hooks.hooksmanager.md)*

*Defined in [packages/hooks/source/createHooksManager.ts:20](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/hooks/source/createHooksManager.ts#L20)*

**Parameters:**

Name | Type |
------ | ------ |
`uuidEnv` | UuidEnv |

**Returns:** *[HooksManager](../interfaces/hooks.hooksmanager.md)*

___

###  createHooksManagerEnv

▸ **createHooksManagerEnv**(`uuidEnv`: UuidEnv): *[HooksManagerEnv](../interfaces/hooks.hooksmanagerenv.md)*

*Defined in [packages/hooks/source/createHooksManagerEnv.ts:8](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/hooks/source/createHooksManagerEnv.ts#L8)*

**Parameters:**

Name | Type |
------ | ------ |
`uuidEnv` | UuidEnv |

**Returns:** *[HooksManagerEnv](../interfaces/hooks.hooksmanagerenv.md)*

___

###  createIdGenerator

▸ **createIdGenerator**(): *object*

*Defined in [packages/hooks/source/createHookEnvironment.ts:94](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/hooks/source/createHookEnvironment.ts#L94)*

**Returns:** *object*

* **nextId**: *nextId*

* **resetId**: *resetId*

___

###  createTestHookEnvironment

▸ **createTestHookEnvironment**(`uuidEnv`: UuidEnv): *object & [HooksManagerEnv](../interfaces/hooks.hooksmanagerenv.md) & [HookEnv](../interfaces/hooks.hookenv.md)*

*Defined in [packages/hooks/source/createTestHookEnvironment.ts:7](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/hooks/source/createTestHookEnvironment.ts#L7)*

**Parameters:**

Name | Type |
------ | ------ |
`uuidEnv` | UuidEnv |

**Returns:** *object & [HooksManagerEnv](../interfaces/hooks.hooksmanagerenv.md) & [HookEnv](../interfaces/hooks.hookenv.md)*

___

###  createTreeManager

▸ **createTreeManager**<**A**>(): *[TreeManager](hooks.md#treemanager)‹A›*

*Defined in [packages/hooks/source/createTreeManager.ts:4](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/hooks/source/createTreeManager.ts#L4)*

**Type parameters:**

▪ **A**: *object*

**Returns:** *[TreeManager](hooks.md#treemanager)‹A›*

___

###  createUpdateManager

▸ **createUpdateManager**<**A**>(`getAllDescendants`: function): *object*

*Defined in [packages/hooks/source/createUpdateManager.ts:4](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/hooks/source/createUpdateManager.ts#L4)*

**Type parameters:**

▪ **A**: *object*

**Parameters:**

▪ **getAllDescendants**: *function*

▸ (`a`: A): *Generator‹A, any, any›*

**Parameters:**

Name | Type |
------ | ------ |
`a` | A |

**Returns:** *object*

* **hasBeenUpdated**(): *function*

  * (`node`: A): *boolean*

* **setUpdated**(): *function*

  * (`node`: A, `hasBeenUpdated`: boolean): *[PureEffect](effects.md#pureeffect)‹void›*

___

###  didRefChange

▸ **didRefChange**<**A**>(`ref`: [Ref](hooks.md#ref)‹A›, `setRef`: function, `value`: A, `firstRun`: boolean): *boolean*

*Defined in [packages/hooks/source/didRefChange.ts:5](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/hooks/source/didRefChange.ts#L5)*

**Type parameters:**

▪ **A**

**Parameters:**

▪ **ref**: *[Ref](hooks.md#ref)‹A›*

▪ **setRef**: *function*

▸ (`value`: A | null | void | undefined): *void*

**Parameters:**

Name | Type |
------ | ------ |
`value` | A &#124; null &#124; void &#124; undefined |

▪ **value**: *A*

▪ **firstRun**: *boolean*

**Returns:** *boolean*

___

### `Const` getEnvironmentByKey

▸ **getEnvironmentByKey**(`key`: object): *[ChannelEffects](../interfaces/hooks.channeleffects.md)‹[HookEnv](../interfaces/hooks.hookenv.md), [HookEnvironment](../interfaces/hooks.hookenvironment.md)›*

*Defined in [packages/hooks/source/getEnvironmentByKey.ts:4](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/hooks/source/getEnvironmentByKey.ts#L4)*

**Parameters:**

Name | Type |
------ | ------ |
`key` | object |

**Returns:** *[ChannelEffects](../interfaces/hooks.channeleffects.md)‹[HookEnv](../interfaces/hooks.hookenv.md), [HookEnvironment](../interfaces/hooks.hookenvironment.md)›*

___

###  getHookEnv

▸ **getHookEnv**(): *[HookEffects](../interfaces/hooks.hookeffects.md)‹unknown, [HookEnvironment](../interfaces/hooks.hookenvironment.md)›*

*Defined in [packages/hooks/source/getHookEnv.ts:4](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/hooks/source/getHookEnv.ts#L4)*

**Returns:** *[HookEffects](../interfaces/hooks.hookeffects.md)‹unknown, [HookEnvironment](../interfaces/hooks.hookenvironment.md)›*

___

###  manageValue

▸ **manageValue**<**A**, **B**, **E**, **C**>(`value`: A, `index`: number, `identify`: function, `fn`: function, `currentValues`: [Map](../interfaces/objects.mutablemap.md#map)‹[HookEnvironment](../interfaces/hooks.hookenvironment.md), [object, C]›): *[ChannelEffects](../interfaces/hooks.channeleffects.md)‹E & [HookEnv](../interfaces/hooks.hookenv.md), keyof [C, HookEnvironment, B]›*

*Defined in [packages/hooks/source/useEffectBy.ts:51](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/hooks/source/useEffectBy.ts#L51)*

**Type parameters:**

▪ **A**

▪ **B**: *object*

▪ **E**

▪ **C**

**Parameters:**

▪ **value**: *A*

▪ **index**: *number*

▪ **identify**: *function*

▸ (`a`: A): *B*

**Parameters:**

Name | Type |
------ | ------ |
`a` | A |

▪ **fn**: *function*

▸ (`a`: A, `index`: number, `key`: B): *[HookEffects](../interfaces/hooks.hookeffects.md)‹E, C›*

**Parameters:**

Name | Type |
------ | ------ |
`a` | A |
`index` | number |
`key` | B |

▪ **currentValues**: *[Map](../interfaces/objects.mutablemap.md#map)‹[HookEnvironment](../interfaces/hooks.hookenvironment.md), [object, C]›*

**Returns:** *[ChannelEffects](../interfaces/hooks.channeleffects.md)‹E & [HookEnv](../interfaces/hooks.hookenv.md), keyof [C, HookEnvironment, B]›*

___

###  manageValues

▸ **manageValues**<**A**, **B**, **E**, **C**>(`values`: ReadonlyArray‹A›, `identify`: function, `fn`: function, `currentValues`: [Map](../interfaces/objects.mutablemap.md#map)‹[HookEnvironment](../interfaces/hooks.hookenvironment.md), [object, C]›): *[ChannelEffects](../interfaces/hooks.channeleffects.md)‹[HookEnv](../interfaces/hooks.hookenv.md) & [TimerEnv](effects.md#timerenv) & E, ReadonlyArray‹C››*

*Defined in [packages/hooks/source/useEffectBy.ts:19](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/hooks/source/useEffectBy.ts#L19)*

**Type parameters:**

▪ **A**

▪ **B**: *object*

▪ **E**

▪ **C**

**Parameters:**

▪ **values**: *ReadonlyArray‹A›*

▪ **identify**: *function*

▸ (`a`: A): *B*

**Parameters:**

Name | Type |
------ | ------ |
`a` | A |

▪ **fn**: *function*

▸ (`a`: A, `index`: number, `key`: B): *[HookEffects](../interfaces/hooks.hookeffects.md)‹E, C›*

**Parameters:**

Name | Type |
------ | ------ |
`a` | A |
`index` | number |
`key` | B |

▪ **currentValues**: *[Map](../interfaces/objects.mutablemap.md#map)‹[HookEnvironment](../interfaces/hooks.hookenvironment.md), [object, C]›*

**Returns:** *[ChannelEffects](../interfaces/hooks.channeleffects.md)‹[HookEnv](../interfaces/hooks.hookenv.md) & [TimerEnv](effects.md#timerenv) & E, ReadonlyArray‹C››*

___

###  provideChannel

▸ **provideChannel**<**E**, **A**>(`channel`: [Channel](../interfaces/hooks.channel.md)‹E, A›, `initialState`: [InitialState](hooks.md#initialstate)‹E, A›): *[ChannelEffects](../interfaces/hooks.channeleffects.md)‹[HookEnv](../interfaces/hooks.hookenv.md) & E, [UseChannelState](hooks.md#usechannelstate)‹E, A››*

*Defined in [packages/hooks/source/useChannel.ts:39](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/hooks/source/useChannel.ts#L39)*

Used to provided the values of a Channel to itself and all consumers
lower in the tree, if any.

**Type parameters:**

▪ **E**

▪ **A**

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`channel` | [Channel](../interfaces/hooks.channel.md)‹E, A› | - |
`initialState` | [InitialState](hooks.md#initialstate)‹E, A› | channel.defaultValue |

**Returns:** *[ChannelEffects](../interfaces/hooks.channeleffects.md)‹[HookEnv](../interfaces/hooks.hookenv.md) & E, [UseChannelState](hooks.md#usechannelstate)‹E, A››*

___

###  runWithHooks

▸ **runWithHooks**<**A**, **B**>(`effect`: [HookEffects](../interfaces/hooks.hookeffects.md)‹A, B›, `hookEnvironment`: [HookEnvironment](../interfaces/hooks.hookenvironment.md)): *Effects‹A, B›*

*Defined in [packages/hooks/source/runWithHooks.ts:5](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/hooks/source/runWithHooks.ts#L5)*

**Type parameters:**

▪ **A**

▪ **B**

**Parameters:**

Name | Type |
------ | ------ |
`effect` | [HookEffects](../interfaces/hooks.hookeffects.md)‹A, B› |
`hookEnvironment` | [HookEnvironment](../interfaces/hooks.hookenvironment.md) |

**Returns:** *Effects‹A, B›*

___

###  useCallback

▸ **useCallback**<**A**, **B**>(`fn`: [Arity1](lambda.md#arity1)‹A, B›, `deps`: ReadonlyArray‹any›): *[HookEffects](../interfaces/hooks.hookeffects.md)‹unknown, [Arity1](lambda.md#arity1)‹A, B››*

*Defined in [packages/hooks/source/useCallback.ts:5](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/hooks/source/useCallback.ts#L5)*

**Type parameters:**

▪ **A**

▪ **B**

**Parameters:**

Name | Type |
------ | ------ |
`fn` | [Arity1](lambda.md#arity1)‹A, B› |
`deps` | ReadonlyArray‹any› |

**Returns:** *[HookEffects](../interfaces/hooks.hookeffects.md)‹unknown, [Arity1](lambda.md#arity1)‹A, B››*

___

###  useChannel

▸ **useChannel**<**E**, **A**>(`channel`: [Channel](../interfaces/hooks.channel.md)‹E, A›): *[ChannelEffects](../interfaces/hooks.channeleffects.md)‹[HookEnv](../interfaces/hooks.hookenv.md) & E, [UseChannelState](hooks.md#usechannelstate)‹E, A››*

*Defined in [packages/hooks/source/useChannel.ts:29](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/hooks/source/useChannel.ts#L29)*

Used to consume and update the Channels value by a provider
higher up in the tree or in the case of no parents the provided
environment.

**Type parameters:**

▪ **E**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`channel` | [Channel](../interfaces/hooks.channel.md)‹E, A› |

**Returns:** *[ChannelEffects](../interfaces/hooks.channeleffects.md)‹[HookEnv](../interfaces/hooks.hookenv.md) & E, [UseChannelState](hooks.md#usechannelstate)‹E, A››*

___

###  useChannelState

▸ **useChannelState**<**E**, **A**, **B**>(`options`: [UseChannelStateOptions](hooks.md#usechannelstateoptions)‹E, A, B›): *[ChannelEffects](../interfaces/hooks.channeleffects.md)‹[HookEnv](../interfaces/hooks.hookenv.md) & E, [UseChannelState](hooks.md#usechannelstate)‹E, A, B››*

*Defined in [packages/hooks/source/useChannel.ts:13](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/hooks/source/useChannel.ts#L13)*

**Type parameters:**

▪ **E**

▪ **A**

▪ **B**

**Parameters:**

Name | Type |
------ | ------ |
`options` | [UseChannelStateOptions](hooks.md#usechannelstateoptions)‹E, A, B› |

**Returns:** *[ChannelEffects](../interfaces/hooks.channeleffects.md)‹[HookEnv](../interfaces/hooks.hookenv.md) & E, [UseChannelState](hooks.md#usechannelstate)‹E, A, B››*

___

### `Const` useChannelValue

▸ **useChannelValue**<**E**, **A**>(`channel`: [Channel](../interfaces/hooks.channel.md)‹E, A›): *[ChannelEffects](../interfaces/hooks.channeleffects.md)‹[HookEnv](../interfaces/hooks.hookenv.md) & E, A›*

*Defined in [packages/hooks/source/useChannel.ts:59](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/hooks/source/useChannel.ts#L59)*

**Type parameters:**

▪ **E**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`channel` | [Channel](../interfaces/hooks.channel.md)‹E, A› |

**Returns:** *[ChannelEffects](../interfaces/hooks.channeleffects.md)‹[HookEnv](../interfaces/hooks.hookenv.md) & E, A›*

___

###  useDepChange

▸ **useDepChange**<**A**>(`dep`: A, `firstRun`: boolean): *[HookEffects](../interfaces/hooks.hookeffects.md)‹unknown, boolean›*

*Defined in [packages/hooks/source/useDepChange.ts:5](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/hooks/source/useDepChange.ts#L5)*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`dep` | A | - |
`firstRun` | boolean | true |

**Returns:** *[HookEffects](../interfaces/hooks.hookeffects.md)‹unknown, boolean›*

___

###  useEffect

▸ **useEffect**<**A**>(`fn`: [Fn](lambda.md#fn)‹A, Disposable›, `deps`: A): *[ChannelEffects](../interfaces/hooks.channeleffects.md)‹[HookEnv](../interfaces/hooks.hookenv.md) & [TimerEnv](effects.md#timerenv), Disposable›*

*Defined in [packages/hooks/source/useEffect.ts:12](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/hooks/source/useEffect.ts#L12)*

**Type parameters:**

▪ **A**: *keyof any[]*

**Parameters:**

Name | Type |
------ | ------ |
`fn` | [Fn](lambda.md#fn)‹A, Disposable› |
`deps` | A |

**Returns:** *[ChannelEffects](../interfaces/hooks.channeleffects.md)‹[HookEnv](../interfaces/hooks.hookenv.md) & [TimerEnv](effects.md#timerenv), Disposable›*

___

###  useEffectBy

▸ **useEffectBy**<**A**, **B**, **E**, **C**>(`values`: ReadonlyArray‹A›, `identify`: function, `fn`: function): *[ChannelEffects](../interfaces/hooks.channeleffects.md)‹[HookEnv](../interfaces/hooks.hookenv.md) & [TimerEnv](effects.md#timerenv) & E, ReadonlyArray‹C››*

*Defined in [packages/hooks/source/useEffectBy.ts:9](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/hooks/source/useEffectBy.ts#L9)*

**Type parameters:**

▪ **A**

▪ **B**: *object*

▪ **E**

▪ **C**

**Parameters:**

▪ **values**: *ReadonlyArray‹A›*

▪ **identify**: *function*

▸ (`a`: A): *B*

**Parameters:**

Name | Type |
------ | ------ |
`a` | A |

▪ **fn**: *function*

▸ (`a`: A, `index`: number, `key`: B): *[HookEffects](../interfaces/hooks.hookeffects.md)‹E, C›*

**Parameters:**

Name | Type |
------ | ------ |
`a` | A |
`index` | number |
`key` | B |

**Returns:** *[ChannelEffects](../interfaces/hooks.channeleffects.md)‹[HookEnv](../interfaces/hooks.hookenv.md) & [TimerEnv](effects.md#timerenv) & E, ReadonlyArray‹C››*

___

###  useEffectOnce

▸ **useEffectOnce**(`fn`: [IO](lambda.md#io)‹Disposable›): *[ChannelEffects](../interfaces/hooks.channeleffects.md)‹[HookEnv](../interfaces/hooks.hookenv.md) & [TimerEnv](effects.md#timerenv), Disposable›*

*Defined in [packages/hooks/source/useEffect.ts:32](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/hooks/source/useEffect.ts#L32)*

**Parameters:**

Name | Type |
------ | ------ |
`fn` | [IO](lambda.md#io)‹Disposable› |

**Returns:** *[ChannelEffects](../interfaces/hooks.channeleffects.md)‹[HookEnv](../interfaces/hooks.hookenv.md) & [TimerEnv](effects.md#timerenv), Disposable›*

___

###  useLens

▸ **useLens**<**A**, **B**>(`__namedParameters`: [function, function], `lens`: Lens‹A, B›): *[HookEffects](../interfaces/hooks.hookeffects.md)‹unknown, [UseState](hooks.md#usestate)‹B››*

*Defined in [packages/hooks/source/useLens.ts:18](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/hooks/source/useLens.ts#L18)*

**Type parameters:**

▪ **A**

▪ **B**

**Parameters:**

Name | Type |
------ | ------ |
`__namedParameters` | [function, function] |
`lens` | Lens‹A, B› |

**Returns:** *[HookEffects](../interfaces/hooks.hookeffects.md)‹unknown, [UseState](hooks.md#usestate)‹B››*

___

###  useLenses

▸ **useLenses**<**A**, **R**>(`state`: [UseState](hooks.md#usestate)‹A›, `lenses`: R): *[HookEffects](../interfaces/hooks.hookeffects.md)‹[HooksManagerEnv](../interfaces/hooks.hooksmanagerenv.md) & [TimerEnv](effects.md#timerenv), [UseLenses](hooks.md#uselenses)‹A, R››*

*Defined in [packages/hooks/source/useLens.ts:54](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/hooks/source/useLens.ts#L54)*

**Type parameters:**

▪ **A**

▪ **R**: *[Record](io.md#const-record)‹string, Lens‹A, any››*

**Parameters:**

Name | Type |
------ | ------ |
`state` | [UseState](hooks.md#usestate)‹A› |
`lenses` | R |

**Returns:** *[HookEffects](../interfaces/hooks.hookeffects.md)‹[HooksManagerEnv](../interfaces/hooks.hooksmanagerenv.md) & [TimerEnv](effects.md#timerenv), [UseLenses](hooks.md#uselenses)‹A, R››*

___

###  useMapChannel

▸ **useMapChannel**<**E**, **A**, **B**>(`fn`: [Arity1](lambda.md#arity1)‹A, B›, `channel`: [Channel](../interfaces/hooks.channel.md)‹E, A›): *[ChannelEffects](../interfaces/hooks.channeleffects.md)‹[HookEnv](../interfaces/hooks.hookenv.md) & E, B›*

*Defined in [packages/hooks/source/useChannel.ts:50](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/hooks/source/useChannel.ts#L50)*

Used to consume and map over the values in a channel. Will only be marked
as updated if the return value of the selector has changed.

**Type parameters:**

▪ **E**

▪ **A**

▪ **B**

**Parameters:**

Name | Type |
------ | ------ |
`fn` | [Arity1](lambda.md#arity1)‹A, B› |
`channel` | [Channel](../interfaces/hooks.channel.md)‹E, A› |

**Returns:** *[ChannelEffects](../interfaces/hooks.channeleffects.md)‹[HookEnv](../interfaces/hooks.hookenv.md) & E, B›*

___

###  useMatches

▸ **useMatches**<**A**, **B**>(`value`: A, `matches`: ReadonlyArray‹Match‹A, B››): *[HookEffects](../interfaces/hooks.hookeffects.md)‹unknown, [Maybe](io.md#const-maybe)‹B››*

*Defined in [packages/hooks/source/useMatches.ts:7](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/hooks/source/useMatches.ts#L7)*

**Type parameters:**

▪ **A**

▪ **B**

**Parameters:**

Name | Type |
------ | ------ |
`value` | A |
`matches` | ReadonlyArray‹Match‹A, B›› |

**Returns:** *[HookEffects](../interfaces/hooks.hookeffects.md)‹unknown, [Maybe](io.md#const-maybe)‹B››*

___

###  useMemo

▸ **useMemo**<**E**, **A**, **B**>(`fn`: [Fn](lambda.md#fn)‹A, B›, `deps`: A): *[HookEffects](../interfaces/hooks.hookeffects.md)‹E, B›*

*Defined in [packages/hooks/source/useMemo.ts:7](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/hooks/source/useMemo.ts#L7)*

**Type parameters:**

▪ **E**

▪ **A**: *keyof any[]*

▪ **B**

**Parameters:**

Name | Type |
------ | ------ |
`fn` | [Fn](lambda.md#fn)‹A, B› |
`deps` | A |

**Returns:** *[HookEffects](../interfaces/hooks.hookeffects.md)‹E, B›*

___

###  useMemoEffect

▸ **useMemoEffect**<**E**, **A**, **B**>(`fn`: [Fn](lambda.md#fn)‹A, Effects‹E, B››, `deps`: A): *[HookEffects](../interfaces/hooks.hookeffects.md)‹E, B›*

*Defined in [packages/hooks/source/useMemo.ts:18](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/hooks/source/useMemo.ts#L18)*

**Type parameters:**

▪ **E**

▪ **A**: *keyof any[]*

▪ **B**

**Parameters:**

Name | Type |
------ | ------ |
`fn` | [Fn](lambda.md#fn)‹A, Effects‹E, B›› |
`deps` | A |

**Returns:** *[HookEffects](../interfaces/hooks.hookeffects.md)‹E, B›*

___

###  useReduceChannel

▸ **useReduceChannel**<**E**, **A**, **B**>(`reducer`: [Arity2](lambda.md#arity2)‹A, B, A›, `channel`: [Channel](../interfaces/hooks.channel.md)‹E, A›): *[ChannelEffects](../interfaces/hooks.channeleffects.md)‹[HookEnv](../interfaces/hooks.hookenv.md) & E, keyof [IO<ChannelEffects<E, A>>, Arity1<B, ChannelEffects<E, A>>]›*

*Defined in [packages/hooks/source/useChannel.ts:62](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/hooks/source/useChannel.ts#L62)*

**Type parameters:**

▪ **E**

▪ **A**

▪ **B**

**Parameters:**

Name | Type |
------ | ------ |
`reducer` | [Arity2](lambda.md#arity2)‹A, B, A› |
`channel` | [Channel](../interfaces/hooks.channel.md)‹E, A› |

**Returns:** *[ChannelEffects](../interfaces/hooks.channeleffects.md)‹[HookEnv](../interfaces/hooks.hookenv.md) & E, keyof [IO<ChannelEffects<E, A>>, Arity1<B, ChannelEffects<E, A>>]›*

___

###  useReducer

▸ **useReducer**<**E**, **A**, **B**>(`reducer`: [Arity2](lambda.md#arity2)‹A, B, A›, `seed`: [InitialState](hooks.md#initialstate)‹E, A›): *[HookEffects](../interfaces/hooks.hookeffects.md)‹E, keyof [IO<PureEffect<A>>, Arity1<B, PureEffect<A>>]›*

*Defined in [packages/hooks/source/useReducer.ts:7](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/hooks/source/useReducer.ts#L7)*

**Type parameters:**

▪ **E**

▪ **A**

▪ **B**

**Parameters:**

Name | Type |
------ | ------ |
`reducer` | [Arity2](lambda.md#arity2)‹A, B, A› |
`seed` | [InitialState](hooks.md#initialstate)‹E, A› |

**Returns:** *[HookEffects](../interfaces/hooks.hookeffects.md)‹E, keyof [IO<PureEffect<A>>, Arity1<B, PureEffect<A>>]›*

___

###  useRef

▸ **useRef**<**E**, **A**>(`initialState?`: [InitialState](hooks.md#initialstate)‹E, A›): *[HookEffects](../interfaces/hooks.hookeffects.md)‹E, [UseRef](hooks.md#useref)‹A››*

*Defined in [packages/hooks/source/useRef.ts:4](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/hooks/source/useRef.ts#L4)*

**Type parameters:**

▪ **E**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`initialState?` | [InitialState](hooks.md#initialstate)‹E, A› |

**Returns:** *[HookEffects](../interfaces/hooks.hookeffects.md)‹E, [UseRef](hooks.md#useref)‹A››*

___

###  useRemoteData

▸ **useRemoteData**<**E**, **A**, **B**>(`initial`: [InitialState](hooks.md#initialstate)‹E, [RemoteData](remote_data.md#remotedata)‹A, B››): *[HookEffects](../interfaces/hooks.hookeffects.md)‹E, keyof [IO<PureEffect<RemoteData<A, B>>>, RemoteDataActions<A, B>]›*

*Defined in [packages/hooks/source/useRemoteData.ts:19](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/hooks/source/useRemoteData.ts#L19)*

**Type parameters:**

▪ **E**

▪ **A**

▪ **B**

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`initial` | [InitialState](hooks.md#initialstate)‹E, [RemoteData](remote_data.md#remotedata)‹A, B›› | InitialState.of(NoData) as InitialState<
    E,
    RemoteData<A, B>
  > |

**Returns:** *[HookEffects](../interfaces/hooks.hookeffects.md)‹E, keyof [IO<PureEffect<RemoteData<A, B>>>, RemoteDataActions<A, B>]›*

___

###  useRouter

▸ **useRouter**<**A**, **B**>(`routes`: ReadonlyArray‹Route‹any, A››, `scope?`: [Path](history.md#path)): *[HookEffects](../interfaces/hooks.hookeffects.md)‹[HistoryEnv](history.md#historyenv)‹B›, [Maybe](io.md#const-maybe)‹A››*

*Defined in [packages/hooks/source/useRouter.ts:9](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/hooks/source/useRouter.ts#L9)*

**Type parameters:**

▪ **A**

▪ **B**

**Parameters:**

Name | Type |
------ | ------ |
`routes` | ReadonlyArray‹Route‹any, A›› |
`scope?` | [Path](history.md#path) |

**Returns:** *[HookEffects](../interfaces/hooks.hookeffects.md)‹[HistoryEnv](history.md#historyenv)‹B›, [Maybe](io.md#const-maybe)‹A››*

___

###  useState

▸ **useState**<**E**, **A**>(`initialState`: [InitialState](hooks.md#initialstate)‹E, A›): *[HookEffects](../interfaces/hooks.hookeffects.md)‹E, [UseState](hooks.md#usestate)‹A››*

*Defined in [packages/hooks/source/useState.ts:4](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/hooks/source/useState.ts#L4)*

**Type parameters:**

▪ **E**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`initialState` | [InitialState](hooks.md#initialstate)‹E, A› |

**Returns:** *[HookEffects](../interfaces/hooks.hookeffects.md)‹E, [UseState](hooks.md#usestate)‹A››*

___

###  useTimer

▸ **useTimer**(): *[ChannelEffects](../interfaces/hooks.channeleffects.md)‹[HookEnv](../interfaces/hooks.hookenv.md) & [TimerEnv](effects.md#timerenv), Timer›*

*Defined in [packages/hooks/source/useTimer.ts:7](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/hooks/source/useTimer.ts#L7)*

**Returns:** *[ChannelEffects](../interfaces/hooks.channeleffects.md)‹[HookEnv](../interfaces/hooks.hookenv.md) & [TimerEnv](effects.md#timerenv), Timer›*
