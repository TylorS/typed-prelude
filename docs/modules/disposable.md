[Typed - v3.4.1](../README.md) › [Globals](../globals.md) › [disposable](disposable.md)

# Package: disposable

# @typed/disposable

> A handy interface for cleaning up after yourself.

## Index

### Namespaces

* [Disposable](disposable.md#disposable)

### Interfaces

* [LazyDisposable](../interfaces/disposable.lazydisposable.md)

### Functions

* [dispose](disposable.md#const-dispose)
* [disposeAll](disposable.md#const-disposeall)
* [onDisposed](disposable.md#ondisposed)
* [withIsDisposed](disposable.md#const-withisdisposed)

## Namespaces

###  Disposable

• **Disposable**:

*Defined in [packages/disposable/source/Disposable.ts:6](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/disposable/source/Disposable.ts#L6)*

*Defined in [packages/disposable/source/Disposable.ts:20](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/disposable/source/Disposable.ts#L20)*

Generic type for cleaning up resources

### `Readonly` dispose

• **dispose**: *function*

*Defined in [packages/disposable/source/Disposable.ts:7](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/disposable/source/Disposable.ts#L7)*

#### Type declaration:

▸ (): *void*

### `Const` lazy

▸ **lazy**(): *object*

*Defined in [packages/disposable/source/Disposable.ts:29](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/disposable/source/Disposable.ts#L29)*

Create a disposable that is lazily created

**Returns:** *object*

* **addDisposable**(`disposable`: [Disposable](disposable.md#disposable)): *[Disposable](disposable.md#disposable)*

* **dispose**(): *void*

### ▪ **None**: *object*

*Defined in [packages/disposable/source/Disposable.ts:24](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/disposable/source/Disposable.ts#L24)*

Empty Disposable

* **dispose**(): *function*

  * (): *void*

## Functions

### `Const` dispose

▸ **dispose**(`disposable`: [Disposable](disposable.md#disposable)): *void*

*Defined in [packages/disposable/source/Disposable.ts:18](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/disposable/source/Disposable.ts#L18)*

Cleanup a disposable

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`disposable` | [Disposable](disposable.md#disposable) | :: Disposable  |

**Returns:** *void*

___

### `Const` disposeAll

▸ **disposeAll**(`disposables`: keyof Disposable[]): *[Disposable](disposable.md#disposable)*

*Defined in [packages/disposable/source/disposeAll.ts:7](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/disposable/source/disposeAll.ts#L7)*

Clean up more than one disposable

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`disposables` | keyof Disposable[] | :: Disposable[]  |

**Returns:** *[Disposable](disposable.md#disposable)*

___

###  onDisposed

▸ **onDisposed**<**A**>(`fn`: function, `disposable`: [Disposable](disposable.md#disposable)): *[Disposable](disposable.md#disposable)*

*Defined in [packages/disposable/source/Disposable.ts:81](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/disposable/source/Disposable.ts#L81)*

**Type parameters:**

▪ **A**

**Parameters:**

▪ **fn**: *function*

▸ (`error?`: A): *void*

**Parameters:**

Name | Type |
------ | ------ |
`error?` | A |

▪ **disposable**: *[Disposable](disposable.md#disposable)*

**Returns:** *[Disposable](disposable.md#disposable)*

___

### `Const` withIsDisposed

▸ **withIsDisposed**(`fn`: function): *[Disposable](disposable.md#disposable)*

*Defined in [packages/disposable/source/Disposable.ts:68](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/disposable/source/Disposable.ts#L68)*

**Parameters:**

▪ **fn**: *function*

▸ (`isDisposed`: function): *void*

**Parameters:**

▪ **isDisposed**: *function*

▸ (): *boolean*

**Returns:** *[Disposable](disposable.md#disposable)*
