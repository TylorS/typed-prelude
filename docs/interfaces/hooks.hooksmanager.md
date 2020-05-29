[Typed - v3.4.1](../README.md) › [Globals](../globals.md) › [hooks](../modules/hooks.md) › [HooksManager](hooks.hooksmanager.md)

# Interface: HooksManager

A HooksManager is an environment that manages a tree-based hierarchy
of HookEnvironments. By managing an internal hierarchy of HookEnvironments
through a subscription to HookEvents, a HooksManager is able to manage Channels
to provide state that is shared.

## Hierarchy

* UuidEnv

* Disposable

  ↳ **HooksManager**

## Index

### Properties

* [None](hooks.hooksmanager.md#none)
* [dispose](hooks.hooksmanager.md#readonly-dispose)
* [getAllDescendants](hooks.hooksmanager.md#readonly-getalldescendants)
* [hasBeenUpdated](hooks.hooksmanager.md#readonly-hasbeenupdated)
* [hasUpdatedParents](hooks.hooksmanager.md#readonly-hasupdatedparents)
* [hookEvents](hooks.hooksmanager.md#readonly-hookevents)
* [lazy](hooks.hooksmanager.md#lazy)
* [randomUuidSeed](hooks.hooksmanager.md#readonly-randomuuidseed)
* [useChannelState](hooks.hooksmanager.md#readonly-usechannelstate)

## Properties

###  None

• **None**: *object*

Defined in packages/disposable/esm/Disposable.d.ts:20

Empty Disposable

#### Type declaration:

* **dispose**(): *function*

  * (): *void*

___

### `Readonly` dispose

• **dispose**: *function*

*Inherited from [AsyncStorage](asyncstorage.asyncstorage-1.md).[dispose](asyncstorage.asyncstorage-1.md#readonly-dispose)*

Defined in packages/disposable/esm/Disposable.d.ts:6

#### Type declaration:

▸ (): *void*

___

### `Readonly` getAllDescendants

• **getAllDescendants**: *function*

*Defined in [packages/hooks/source/types.ts:67](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/hooks/source/types.ts#L67)*

#### Type declaration:

▸ (`environment`: [HookEnvironment](hooks.hookenvironment.md)): *Iterable‹[HookEnvironment](hooks.hookenvironment.md)›*

**Parameters:**

Name | Type |
------ | ------ |
`environment` | [HookEnvironment](hooks.hookenvironment.md) |

___

### `Readonly` hasBeenUpdated

• **hasBeenUpdated**: *function*

*Defined in [packages/hooks/source/types.ts:65](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/hooks/source/types.ts#L65)*

Check to see if a hook environment has been updated

#### Type declaration:

▸ (`environment`: [HookEnvironment](hooks.hookenvironment.md)): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`environment` | [HookEnvironment](hooks.hookenvironment.md) |

___

### `Readonly` hasUpdatedParents

• **hasUpdatedParents**: *function*

*Defined in [packages/hooks/source/types.ts:66](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/hooks/source/types.ts#L66)*

#### Type declaration:

▸ (`environment`: [HookEnvironment](hooks.hookenvironment.md)): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`environment` | [HookEnvironment](hooks.hookenvironment.md) |

___

### `Readonly` hookEvents

• **hookEvents**: *[Subscription](subscription.subscription-1.md)‹[HookEnvironmentEvent](../modules/hooks.md#hookenvironmentevent)›*

*Defined in [packages/hooks/source/types.ts:52](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/hooks/source/types.ts#L52)*

Listen to hook events

___

###  lazy

• **lazy**: *function*

Defined in packages/disposable/esm/Disposable.d.ts:26

Create a disposable that is lazily created

#### Type declaration:

▸ (): *object*

* **addDisposable**(`disposable`: Disposable): *Disposable*

* **dispose**(): *void*

___

### `Readonly` randomUuidSeed

• **randomUuidSeed**: *function*

*Inherited from [HooksManager](hooks.hooksmanager.md).[randomUuidSeed](hooks.hooksmanager.md#readonly-randomuuidseed)*

Defined in packages/uuid/esm/types.d.ts:5

#### Type declaration:

▸ (): *[UuidSeed](../modules/uuid.md#uuidseed)*

___

### `Readonly` useChannelState

• **useChannelState**: *function*

*Defined in [packages/hooks/source/types.ts:57](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/hooks/source/types.ts#L57)*

Manage a shared state using Channels.

#### Type declaration:

▸ <**E**, **A**, **B**>(`options`: [UseChannelStateOptions](../modules/hooks.md#usechannelstateoptions)‹E, A, B›, `node`: [HookEnvironment](hooks.hookenvironment.md)): *[ChannelEffects](hooks.channeleffects.md)‹E, [UseChannelState](../modules/hooks.md#usechannelstate)‹E, A, B››*

**Type parameters:**

▪ **E**

▪ **A**

▪ **B**

**Parameters:**

Name | Type |
------ | ------ |
`options` | [UseChannelStateOptions](../modules/hooks.md#usechannelstateoptions)‹E, A, B› |
`node` | [HookEnvironment](hooks.hookenvironment.md) |
