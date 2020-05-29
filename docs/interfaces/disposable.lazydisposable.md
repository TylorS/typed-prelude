[Typed - v3.4.1](../README.md) › [Globals](../globals.md) › [disposable](../modules/disposable.md) › [LazyDisposable](disposable.lazydisposable.md)

# Interface: LazyDisposable

## Hierarchy

* [Disposable](../modules/disposable.md#disposable)

  ↳ **LazyDisposable**

## Index

### Properties

* [addDisposable](disposable.lazydisposable.md#readonly-adddisposable)
* [dispose](disposable.lazydisposable.md#readonly-dispose)

### Methods

* [lazy](disposable.lazydisposable.md#lazy)

### Object literals

* [None](disposable.lazydisposable.md#none)

## Properties

### `Readonly` addDisposable

• **addDisposable**: *[Arity1](../modules/lambda.md#arity1)‹[Disposable](../modules/disposable.md#disposable), [Disposable](../modules/disposable.md#disposable)›*

*Defined in [packages/disposable/source/Disposable.ts:11](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/disposable/source/Disposable.ts#L11)*

___

### `Readonly` dispose

• **dispose**: *function*

*Inherited from [Disposable](../modules/disposable.md#disposable).[dispose](../modules/disposable.md#readonly-dispose)*

*Defined in [packages/disposable/source/Disposable.ts:7](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/disposable/source/Disposable.ts#L7)*

#### Type declaration:

▸ (): *void*

## Methods

###  lazy

▸ **lazy**(): *object*

*Defined in [packages/disposable/source/Disposable.ts:29](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/disposable/source/Disposable.ts#L29)*

Create a disposable that is lazily created

**Returns:** *object*

* **addDisposable**(`disposable`: [Disposable](../modules/disposable.md#disposable)): *[Disposable](../modules/disposable.md#disposable)*

* **dispose**(): *void*

## Object literals

###  None

### ▪ **None**: *object*

*Defined in [packages/disposable/source/Disposable.ts:24](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/disposable/source/Disposable.ts#L24)*

Empty Disposable

###  dispose

• **dispose**: *function* = noOp

*Defined in [packages/disposable/source/Disposable.ts:24](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/disposable/source/Disposable.ts#L24)*

#### Type declaration:

▸ (): *void*
