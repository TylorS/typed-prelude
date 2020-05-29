[Typed - v3.4.1](../README.md) › [Globals](../globals.md) › [asyncstorage](../modules/asyncstorage.md) › [AsyncStorage](asyncstorage.asyncstorage-1.md)

# Interface: AsyncStorage <**A**>

## Type parameters

▪ **A**

## Hierarchy

* Disposable

  ↳ **AsyncStorage**

## Index

### Properties

* [None](asyncstorage.asyncstorage-1.md#none)
* [clear](asyncstorage.asyncstorage-1.md#readonly-clear)
* [dispose](asyncstorage.asyncstorage-1.md#readonly-dispose)
* [getItem](asyncstorage.asyncstorage-1.md#readonly-getitem)
* [getItems](asyncstorage.asyncstorage-1.md#readonly-getitems)
* [getKeys](asyncstorage.asyncstorage-1.md#readonly-getkeys)
* [lazy](asyncstorage.asyncstorage-1.md#lazy)
* [removeItem](asyncstorage.asyncstorage-1.md#readonly-removeitem)
* [setItem](asyncstorage.asyncstorage-1.md#readonly-setitem)

## Properties

###  None

• **None**: *object*

Defined in packages/disposable/esm/Disposable.d.ts:20

Empty Disposable

#### Type declaration:

* **dispose**(): *function*

  * (): *void*

___

### `Readonly` clear

• **clear**: *function*

*Defined in [packages/asyncstorage/source/AsyncStorage.ts:13](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/asyncstorage/source/AsyncStorage.ts#L13)*

#### Type declaration:

▸ (): *[ItemEffect](../modules/asyncstorage.md#itemeffect)‹boolean›*

___

### `Readonly` dispose

• **dispose**: *function*

*Inherited from [AsyncStorage](asyncstorage.asyncstorage-1.md).[dispose](asyncstorage.asyncstorage-1.md#readonly-dispose)*

Defined in packages/disposable/esm/Disposable.d.ts:6

#### Type declaration:

▸ (): *void*

___

### `Readonly` getItem

• **getItem**: *function*

*Defined in [packages/asyncstorage/source/AsyncStorage.ts:10](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/asyncstorage/source/AsyncStorage.ts#L10)*

#### Type declaration:

▸ (`key`: string): *[ItemEffect](../modules/asyncstorage.md#itemeffect)‹[Maybe](../modules/io.md#const-maybe)‹A››*

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |

___

### `Readonly` getItems

• **getItems**: *function*

*Defined in [packages/asyncstorage/source/AsyncStorage.ts:9](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/asyncstorage/source/AsyncStorage.ts#L9)*

#### Type declaration:

▸ (): *[ItemsEffect](../modules/asyncstorage.md#itemseffect)‹A›*

___

### `Readonly` getKeys

• **getKeys**: *function*

*Defined in [packages/asyncstorage/source/AsyncStorage.ts:8](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/asyncstorage/source/AsyncStorage.ts#L8)*

#### Type declaration:

▸ (): *[ItemsEffect](../modules/asyncstorage.md#itemseffect)‹string›*

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

### `Readonly` removeItem

• **removeItem**: *function*

*Defined in [packages/asyncstorage/source/AsyncStorage.ts:12](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/asyncstorage/source/AsyncStorage.ts#L12)*

#### Type declaration:

▸ (`key`: string): *[ItemEffect](../modules/asyncstorage.md#itemeffect)‹[Maybe](../modules/io.md#const-maybe)‹A››*

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |

___

### `Readonly` setItem

• **setItem**: *function*

*Defined in [packages/asyncstorage/source/AsyncStorage.ts:11](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/asyncstorage/source/AsyncStorage.ts#L11)*

#### Type declaration:

▸ (`key`: string, `value`: A): *[ItemEffect](../modules/asyncstorage.md#itemeffect)‹A›*

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |
`value` | A |
