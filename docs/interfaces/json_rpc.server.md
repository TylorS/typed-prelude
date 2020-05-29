[Typed - v3.4.1](../README.md) › [Globals](../globals.md) › [json-rpc](../modules/json_rpc.md) › [Server](json_rpc.server.md)

# Interface: Server <**E**>

## Type parameters

▪ **E**

## Hierarchy

* Disposable

  ↳ **Server**

## Index

### Properties

* [None](json_rpc.server.md#none)
* [dispose](json_rpc.server.md#readonly-dispose)
* [lazy](json_rpc.server.md#lazy)
* [registerNotification](json_rpc.server.md#readonly-registernotification)
* [registerRequest](json_rpc.server.md#readonly-registerrequest)

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

###  lazy

• **lazy**: *function*

Defined in packages/disposable/esm/Disposable.d.ts:26

Create a disposable that is lazily created

#### Type declaration:

▸ (): *object*

* **addDisposable**(`disposable`: Disposable): *Disposable*

* **dispose**(): *void*

___

### `Readonly` registerNotification

• **registerNotification**: *function*

*Defined in [packages/json-rpc/source/domain/model/Server.ts:8](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/json-rpc/source/domain/model/Server.ts#L8)*

#### Type declaration:

▸ <**E2**, **A**>(`method`: A["method"], `handler`: [NotificationHandler](../modules/json_rpc.md#notificationhandler)‹E2, A›): *HookEffects‹E & E2, Disposable›*

**Type parameters:**

▪ **E2**

▪ **A**: *[JsonRpcNotification](../modules/json_rpc.md#jsonrpcnotification)*

**Parameters:**

Name | Type |
------ | ------ |
`method` | A["method"] |
`handler` | [NotificationHandler](../modules/json_rpc.md#notificationhandler)‹E2, A› |

___

### `Readonly` registerRequest

• **registerRequest**: *function*

*Defined in [packages/json-rpc/source/domain/model/Server.ts:13](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/json-rpc/source/domain/model/Server.ts#L13)*

#### Type declaration:

▸ <**E2**, **A**, **B**>(`method`: A["method"], `handler`: [RequestHandler](../modules/json_rpc.md#requesthandler)‹E2, A, B›): *HookEffects‹E & E2, Disposable›*

**Type parameters:**

▪ **E2**

▪ **A**: *[JsonRpcRequest](../modules/json_rpc.md#jsonrpcrequest)*

▪ **B**: *[JsonRpcResponse](../modules/json_rpc.md#jsonrpcresponse)*

**Parameters:**

Name | Type |
------ | ------ |
`method` | A["method"] |
`handler` | [RequestHandler](../modules/json_rpc.md#requesthandler)‹E2, A, B› |
