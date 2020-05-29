[Typed - v3.4.1](../README.md) › [Globals](../globals.md) › [json-rpc](../modules/json_rpc.md) › [Connection](json_rpc.connection.md)

# Interface: Connection

## Hierarchy

* Disposable

  ↳ **Connection**

## Index

### Properties

* [None](json_rpc.connection.md#none)
* [[MessageDirection.Incoming]](json_rpc.connection.md#readonly-[messagedirection.incoming])
* [[MessageDirection.Outgoing]](json_rpc.connection.md#readonly-[messagedirection.outgoing])
* [dispose](json_rpc.connection.md#readonly-dispose)
* [id](json_rpc.connection.md#readonly-id)
* [lazy](json_rpc.connection.md#lazy)

## Properties

###  None

• **None**: *object*

Defined in packages/disposable/esm/Disposable.d.ts:20

Empty Disposable

#### Type declaration:

* **dispose**(): *function*

  * (): *void*

___

### `Readonly` [MessageDirection.Incoming]

• **[MessageDirection.Incoming]**: *Subscription‹[Message](../modules/json_rpc.md#message)›*

*Defined in [packages/json-rpc/source/domain/model/Connection.ts:15](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/json-rpc/source/domain/model/Connection.ts#L15)*

___

### `Readonly` [MessageDirection.Outgoing]

• **[MessageDirection.Outgoing]**: *Subscription‹[Message](../modules/json_rpc.md#message)›*

*Defined in [packages/json-rpc/source/domain/model/Connection.ts:16](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/json-rpc/source/domain/model/Connection.ts#L16)*

___

### `Readonly` dispose

• **dispose**: *function*

*Inherited from [AsyncStorage](asyncstorage.asyncstorage-1.md).[dispose](asyncstorage.asyncstorage-1.md#readonly-dispose)*

Defined in packages/disposable/esm/Disposable.d.ts:6

#### Type declaration:

▸ (): *void*

___

### `Readonly` id

• **id**: *[Id](../modules/json_rpc.md#id)*

*Defined in [packages/json-rpc/source/domain/model/Connection.ts:14](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/json-rpc/source/domain/model/Connection.ts#L14)*

___

###  lazy

• **lazy**: *function*

Defined in packages/disposable/esm/Disposable.d.ts:26

Create a disposable that is lazily created

#### Type declaration:

▸ (): *object*

* **addDisposable**(`disposable`: Disposable): *Disposable*

* **dispose**(): *void*
