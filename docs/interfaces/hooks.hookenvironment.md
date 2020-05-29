[Typed - v3.4.1](../README.md) › [Globals](../globals.md) › [hooks](../modules/hooks.md) › [HookEnvironment](hooks.hookenvironment.md)

# Interface: HookEnvironment

## Hierarchy

* LazyDisposable

  ↳ **HookEnvironment**

## Index

### Properties

* [addDisposable](hooks.hookenvironment.md#readonly-adddisposable)
* [clearUpdated](hooks.hookenvironment.md#readonly-clearupdated)
* [dispose](hooks.hookenvironment.md#readonly-dispose)
* [id](hooks.hookenvironment.md#readonly-id)
* [resetId](hooks.hookenvironment.md#readonly-resetid)
* [updated](hooks.hookenvironment.md#readonly-updated)
* [useRef](hooks.hookenvironment.md#readonly-useref)
* [useState](hooks.hookenvironment.md#readonly-usestate)

## Properties

### `Readonly` addDisposable

• **addDisposable**: *[Arity1](../modules/lambda.md#arity1)‹Disposable, Disposable›*

*Inherited from [Fiber](effects.fiber.md).[addDisposable](effects.fiber.md#readonly-adddisposable)*

Defined in packages/disposable/esm/Disposable.d.ts:9

___

### `Readonly` clearUpdated

• **clearUpdated**: *function*

*Defined in [packages/hooks/source/types.ts:97](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/hooks/source/types.ts#L97)*

#### Type declaration:

▸ (): *[PureEffect](../modules/effects.md#pureeffect)‹void›*

___

### `Readonly` dispose

• **dispose**: *function*

*Inherited from [AsyncStorage](asyncstorage.asyncstorage-1.md).[dispose](asyncstorage.asyncstorage-1.md#readonly-dispose)*

Defined in packages/disposable/esm/Disposable.d.ts:6

#### Type declaration:

▸ (): *void*

___

### `Readonly` id

• **id**: *[Uuid](../modules/io.md#const-uuid)*

*Defined in [packages/hooks/source/types.ts:83](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/hooks/source/types.ts#L83)*

___

### `Readonly` resetId

• **resetId**: *function*

*Defined in [packages/hooks/source/types.ts:86](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/hooks/source/types.ts#L86)*

#### Type declaration:

▸ (): *[PureEffect](../modules/effects.md#pureeffect)‹void›*

___

### `Readonly` updated

• **updated**: *boolean*

*Defined in [packages/hooks/source/types.ts:96](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/hooks/source/types.ts#L96)*

___

### `Readonly` useRef

• **useRef**: *function*

*Defined in [packages/hooks/source/types.ts:89](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/hooks/source/types.ts#L89)*

#### Type declaration:

▸ <**E**, **A**>(`initialState?`: [InitialState](../modules/hooks.md#initialstate)‹E, A | null | undefined | void›): *Effects‹E, [UseRef](../modules/hooks.md#useref)‹A››*

**Type parameters:**

▪ **E**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`initialState?` | [InitialState](../modules/hooks.md#initialstate)‹E, A &#124; null &#124; undefined &#124; void› |

___

### `Readonly` useState

• **useState**: *function*

*Defined in [packages/hooks/source/types.ts:94](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/hooks/source/types.ts#L94)*

#### Type declaration:

▸ <**E**, **A**>(`initialState`: [InitialState](../modules/hooks.md#initialstate)‹E, A›): *Effects‹E, [UseState](../modules/hooks.md#usestate)‹A››*

**Type parameters:**

▪ **E**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`initialState` | [InitialState](../modules/hooks.md#initialstate)‹E, A› |
