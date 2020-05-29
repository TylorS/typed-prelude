[Typed - v3.4.1](../README.md) › [Globals](../globals.md) › [json-rpc](json_rpc.md)

# Package: json-rpc

# @typed/json-rpc 

A relative work-in-progress compared to the rest of the libraries in Typed, but is an attempt to 
abstract the building of JSON-RPC servers and client connects using @typed/effects, @typed/hooks, and the ecosystem.

## Index

### Enumerations

* [JsonRpcErrorCode](../enums/json_rpc.jsonrpcerrorcode.md)
* [MessageDirection](../enums/json_rpc.messagedirection.md)

### Interfaces

* [Connection](../interfaces/json_rpc.connection.md)
* [SendMessage](../interfaces/json_rpc.sendmessage.md)
* [Server](../interfaces/json_rpc.server.md)
* [WaitForResponse](../interfaces/json_rpc.waitforresponse.md)

### Type aliases

* [Batch](json_rpc.md#batch)
* [BatchRequest](json_rpc.md#batchrequest)
* [BatchResponse](json_rpc.md#batchresponse)
* [ConnectionEnv](json_rpc.md#connectionenv)
* [ConnectionEvent](json_rpc.md#connectionevent)
* [HandlerMap](json_rpc.md#handlermap)
* [Id](json_rpc.md#id)
* [IsNever](json_rpc.md#isnever)
* [JsonRpcError](json_rpc.md#jsonrpcerror)
* [JsonRpcFailedResponse](json_rpc.md#jsonrpcfailedresponse)
* [JsonRpcNotification](json_rpc.md#jsonrpcnotification)
* [JsonRpcRequest](json_rpc.md#jsonrpcrequest)
* [JsonRpcResponse](json_rpc.md#jsonrpcresponse)
* [JsonRpcSuccessfulResponse](json_rpc.md#jsonrpcsuccessfulresponse)
* [Message](json_rpc.md#message)
* [NotificationHandler](json_rpc.md#notificationhandler)
* [RequestHandler](json_rpc.md#requesthandler)
* [SendRequest](json_rpc.md#sendrequest)
* [ServerChannel](json_rpc.md#serverchannel)
* [ServerState](json_rpc.md#serverstate)
* [StructuredJson](json_rpc.md#structuredjson)

### Variables

* [OPTIONAL_KEYS](json_rpc.md#const-optional_keys)
* [OPTIONAL_KEYS](json_rpc.md#const-optional_keys)
* [REQUIRED_KEYS](json_rpc.md#const-required_keys)
* [REQUIRED_KEYS](json_rpc.md#const-required_keys)
* [isId](json_rpc.md#const-isid)
* [isMessage](json_rpc.md#const-ismessage)

### Functions

* [applyConnectionEvent](json_rpc.md#const-applyconnectionevent)
* [createConnectionEventSubscription](json_rpc.md#const-createconnectioneventsubscription)
* [createFailedResponse](json_rpc.md#createfailedresponse)
* [createNotification](json_rpc.md#createnotification)
* [createRequest](json_rpc.md#createrequest)
* [createServer](json_rpc.md#createserver)
* [createSuccessfulResponse](json_rpc.md#createsuccessfulresponse)
* [createTestConnection](json_rpc.md#const-createtestconnection)
* [createTestServerChannel](json_rpc.md#const-createtestserverchannel)
* [getOppositeDirection](json_rpc.md#getoppositedirection)
* [getSubscription](json_rpc.md#getsubscription)
* [isBatchRequest](json_rpc.md#isbatchrequest)
* [isBatchResponse](json_rpc.md#isbatchresponse)
* [isFailedResponse](json_rpc.md#const-isfailedresponse)
* [isNotification](json_rpc.md#isnotification)
* [isRequest](json_rpc.md#isrequest)
* [isResponse](json_rpc.md#isresponse)
* [isSuccessfulResponse](json_rpc.md#const-issuccessfulresponse)
* [sendMessage](json_rpc.md#const-sendmessage)
* [sendRequest](json_rpc.md#const-sendrequest)
* [waitForResponse](json_rpc.md#const-waitforresponse)

### Object literals

* [VALIDATE_NOTIFICATION_KEYS](json_rpc.md#const-validate_notification_keys)
* [VALIDATE_RESPONSE_VALUES](json_rpc.md#const-validate_response_values)

## Type aliases

###  Batch

Ƭ **Batch**: *[BatchRequest](json_rpc.md#batchrequest) | [BatchResponse](json_rpc.md#batchresponse)*

*Defined in [packages/json-rpc/source/domain/model/json-rpc-v2.ts:9](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/json-rpc/source/domain/model/json-rpc-v2.ts#L9)*

___

###  BatchRequest

Ƭ **BatchRequest**: *[JsonRpcRequest](json_rpc.md#jsonrpcrequest)[]*

*Defined in [packages/json-rpc/source/domain/model/json-rpc-v2.ts:7](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/json-rpc/source/domain/model/json-rpc-v2.ts#L7)*

___

###  BatchResponse

Ƭ **BatchResponse**: *[JsonRpcResponse](json_rpc.md#jsonrpcresponse)[]*

*Defined in [packages/json-rpc/source/domain/model/json-rpc-v2.ts:8](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/json-rpc/source/domain/model/json-rpc-v2.ts#L8)*

___

###  ConnectionEnv

Ƭ **ConnectionEnv**: *object*

*Defined in [packages/json-rpc/source/domain/model/Connection.ts:11](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/json-rpc/source/domain/model/Connection.ts#L11)*

#### Type declaration:

* **connection**: *[Connection](../interfaces/json_rpc.connection.md)*

___

###  ConnectionEvent

Ƭ **ConnectionEvent**: *[Tuple](tuple.md#tuple)‹"add", [Connection](../interfaces/json_rpc.connection.md)› | [Tuple](tuple.md#tuple)‹"remove", [Connection](../interfaces/json_rpc.connection.md)›*

*Defined in [packages/json-rpc/source/domain/model/Server.ts:27](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/json-rpc/source/domain/model/Server.ts#L27)*

___

###  HandlerMap

Ƭ **HandlerMap**: *ReadonlyMap‹string, [Tuple](tuple.md#tuple)‹A, any››*

*Defined in [packages/json-rpc/source/infrastructure/ServerChannel.ts:16](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/json-rpc/source/infrastructure/ServerChannel.ts#L16)*

___

###  Id

Ƭ **Id**: *string | number*

*Defined in [packages/json-rpc/source/domain/model/json-rpc-v2.ts:3](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/json-rpc/source/domain/model/json-rpc-v2.ts#L3)*

___

###  IsNever

Ƭ **IsNever**: *[A] extends [never] ? true : false*

*Defined in [packages/json-rpc/source/domain/model/json-rpc-v2.ts:72](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/json-rpc/source/domain/model/json-rpc-v2.ts#L72)*

___

###  JsonRpcError

Ƭ **JsonRpcError**: *IsNever<ErrorData> extends true ? object : object*

*Defined in [packages/json-rpc/source/domain/model/json-rpc-v2.ts:59](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/json-rpc/source/domain/model/json-rpc-v2.ts#L59)*

___

###  JsonRpcFailedResponse

Ƭ **JsonRpcFailedResponse**: *object*

*Defined in [packages/json-rpc/source/domain/model/json-rpc-v2.ts:53](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/json-rpc/source/domain/model/json-rpc-v2.ts#L53)*

#### Type declaration:

* **error**: *[JsonRpcError](json_rpc.md#jsonrpcerror)‹Code, ErrorData›*

* **id**: *[Id](json_rpc.md#id)*

* **jsonrpc**: *"2.0"*

___

###  JsonRpcNotification

Ƭ **JsonRpcNotification**: *IsNever<Params> extends true ? object : object*

*Defined in [packages/json-rpc/source/domain/model/json-rpc-v2.ts:11](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/json-rpc/source/domain/model/json-rpc-v2.ts#L11)*

___

###  JsonRpcRequest

Ƭ **JsonRpcRequest**: *IsNever<Params> extends true ? object : object*

*Defined in [packages/json-rpc/source/domain/model/json-rpc-v2.ts:25](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/json-rpc/source/domain/model/json-rpc-v2.ts#L25)*

___

###  JsonRpcResponse

Ƭ **JsonRpcResponse**: *[JsonRpcSuccessfulResponse](json_rpc.md#jsonrpcsuccessfulresponse)‹Result› | [JsonRpcFailedResponse](json_rpc.md#jsonrpcfailedresponse)‹Code, ErrorData›*

*Defined in [packages/json-rpc/source/domain/model/json-rpc-v2.ts:41](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/json-rpc/source/domain/model/json-rpc-v2.ts#L41)*

___

###  JsonRpcSuccessfulResponse

Ƭ **JsonRpcSuccessfulResponse**: *object*

*Defined in [packages/json-rpc/source/domain/model/json-rpc-v2.ts:47](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/json-rpc/source/domain/model/json-rpc-v2.ts#L47)*

#### Type declaration:

* **id**: *[Id](json_rpc.md#id)*

* **jsonrpc**: *"2.0"*

* **result**: *Result*

___

###  Message

Ƭ **Message**: *[JsonRpcRequest](json_rpc.md#jsonrpcrequest) | [JsonRpcResponse](json_rpc.md#jsonrpcresponse) | [JsonRpcNotification](json_rpc.md#jsonrpcnotification) | [Batch](json_rpc.md#batch)*

*Defined in [packages/json-rpc/source/domain/model/json-rpc-v2.ts:6](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/json-rpc/source/domain/model/json-rpc-v2.ts#L6)*

___

###  NotificationHandler

Ƭ **NotificationHandler**: *function*

*Defined in [packages/json-rpc/source/domain/model/Server.ts:19](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/json-rpc/source/domain/model/Server.ts#L19)*

#### Type declaration:

▸ (`notification`: A): *HookEffects‹E, void›*

**Parameters:**

Name | Type |
------ | ------ |
`notification` | A |

___

###  RequestHandler

Ƭ **RequestHandler**: *function*

*Defined in [packages/json-rpc/source/domain/model/Server.ts:23](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/json-rpc/source/domain/model/Server.ts#L23)*

#### Type declaration:

▸ (`notification`: A): *HookEffects‹E, B›*

**Parameters:**

Name | Type |
------ | ------ |
`notification` | A |

___

###  SendRequest

Ƭ **SendRequest**: *function*

*Defined in [packages/json-rpc/source/domain/model/Connection.ts:27](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/json-rpc/source/domain/model/Connection.ts#L27)*

#### Type declaration:

▸ <**A**, **B**>(`request`: A, `direction`: [MessageDirection](../enums/json_rpc.messagedirection.md)): *Effects‹E, B›*

**Type parameters:**

▪ **A**: *[JsonRpcRequest](json_rpc.md#jsonrpcrequest)*

▪ **B**: *[JsonRpcResponse](json_rpc.md#jsonrpcresponse)*

**Parameters:**

Name | Type |
------ | ------ |
`request` | A |
`direction` | [MessageDirection](../enums/json_rpc.messagedirection.md) |

___

###  ServerChannel

Ƭ **ServerChannel**: *Channel‹E, [ServerState](json_rpc.md#serverstate)›*

*Defined in [packages/json-rpc/source/infrastructure/ServerChannel.ts:7](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/json-rpc/source/infrastructure/ServerChannel.ts#L7)*

___

###  ServerState

Ƭ **ServerState**: *object*

*Defined in [packages/json-rpc/source/infrastructure/ServerChannel.ts:9](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/json-rpc/source/infrastructure/ServerChannel.ts#L9)*

#### Type declaration:

* **connectionEvents**: *Subscription‹[ConnectionEvent](json_rpc.md#connectionevent)›*

* **connections**: *ReadonlyArray‹[Connection](../interfaces/json_rpc.connection.md)›*

* **notificationHandlers**: *[HandlerMap](json_rpc.md#handlermap)‹[NotificationHandler](json_rpc.md#notificationhandler)‹any, any››*

* **requestHandlers**: *[HandlerMap](json_rpc.md#handlermap)‹[RequestHandler](json_rpc.md#requesthandler)‹any, any, any››*

___

###  StructuredJson

Ƭ **StructuredJson**: *JsonObject | [JsonArray](common.md#jsonarray)*

*Defined in [packages/json-rpc/source/domain/model/json-rpc-v2.ts:4](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/json-rpc/source/domain/model/json-rpc-v2.ts#L4)*

## Variables

### `Const` OPTIONAL_KEYS

• **OPTIONAL_KEYS**: *ReadonlyArray‹Exclude‹keyof JsonRpcNotification<any, any>, keyof JsonRpcNotification<any, never>››* = ['params']

*Defined in [packages/json-rpc/source/domain/services/validations/isNotification.ts:6](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/json-rpc/source/domain/services/validations/isNotification.ts#L6)*

___

### `Const` OPTIONAL_KEYS

• **OPTIONAL_KEYS**: *ReadonlyArray‹Exclude‹keyof JsonRpcFailedResponse | keyof JsonRpcSuccessfulResponse, keyof JsonRpcResponse››* = ['result', 'error']

*Defined in [packages/json-rpc/source/domain/services/validations/isResponse.ts:6](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/json-rpc/source/domain/services/validations/isResponse.ts#L6)*

___

### `Const` REQUIRED_KEYS

• **REQUIRED_KEYS**: *ReadonlyArray‹keyof JsonRpcNotification<any, never>›* = ['jsonrpc', 'method']

*Defined in [packages/json-rpc/source/domain/services/validations/isNotification.ts:5](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/json-rpc/source/domain/services/validations/isNotification.ts#L5)*

___

### `Const` REQUIRED_KEYS

• **REQUIRED_KEYS**: *ReadonlyArray‹keyof JsonRpcResponse›* = ['jsonrpc', 'id']

*Defined in [packages/json-rpc/source/domain/services/validations/isResponse.ts:5](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/json-rpc/source/domain/services/validations/isResponse.ts#L5)*

___

### `Const` isId

• **isId**: *function* = or(isString, isNumber)

*Defined in [packages/json-rpc/source/domain/services/validations/isRequest.ts:5](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/json-rpc/source/domain/services/validations/isRequest.ts#L5)*

#### Type declaration:

▸ (`value`: unknown): *value is A | B*

**Parameters:**

Name | Type |
------ | ------ |
`value` | unknown |

___

### `Const` isMessage

• **isMessage**: *function* = or(
  isNotification,
  or(isRequest, or(isResponse, or(isBatchRequest, isBatchResponse))),
)

*Defined in [packages/json-rpc/source/domain/services/validations/isMessage.ts:9](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/json-rpc/source/domain/services/validations/isMessage.ts#L9)*

#### Type declaration:

▸ (`x`: unknown): *x is Message*

**Parameters:**

Name | Type |
------ | ------ |
`x` | unknown |

## Functions

### `Const` applyConnectionEvent

▸ **applyConnectionEvent**(`__namedParameters`: ["add" | "remove", [Connection](../interfaces/json_rpc.connection.md)]): *(Anonymous function)*

*Defined in [packages/json-rpc/source/infrastructure/createServer.ts:205](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/json-rpc/source/infrastructure/createServer.ts#L205)*

**Parameters:**

Name | Type |
------ | ------ |
`__namedParameters` | ["add" &#124; "remove", [Connection](../interfaces/json_rpc.connection.md)] |

**Returns:** *(Anonymous function)*

___

### `Const` createConnectionEventSubscription

▸ **createConnectionEventSubscription**(): *Subscription‹[ConnectionEvent](json_rpc.md#connectionevent)›*

*Defined in [packages/json-rpc/source/infrastructure/createTestServerChannel.ts:23](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/json-rpc/source/infrastructure/createTestServerChannel.ts#L23)*

**Returns:** *Subscription‹[ConnectionEvent](json_rpc.md#connectionevent)›*

___

###  createFailedResponse

▸ **createFailedResponse**<**Code**, **ErrorData**>(`requestId`: [Id](json_rpc.md#id), `error`: [JsonRpcError](json_rpc.md#jsonrpcerror)‹Code, ErrorData›): *[JsonRpcFailedResponse](json_rpc.md#jsonrpcfailedresponse)‹Code, ErrorData›*

*Defined in [packages/json-rpc/source/domain/services/messages/createFailedResponse.ts:4](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/json-rpc/source/domain/services/messages/createFailedResponse.ts#L4)*

**Type parameters:**

▪ **Code**: *number*

▪ **ErrorData**: *[Json](common.md#json)*

**Parameters:**

Name | Type |
------ | ------ |
`requestId` | [Id](json_rpc.md#id) |
`error` | [JsonRpcError](json_rpc.md#jsonrpcerror)‹Code, ErrorData› |

**Returns:** *[JsonRpcFailedResponse](json_rpc.md#jsonrpcfailedresponse)‹Code, ErrorData›*

___

###  createNotification

▸ **createNotification**<**A**>(`method`: A): *[JsonRpcNotification](json_rpc.md#jsonrpcnotification)‹A›*

*Defined in [packages/json-rpc/source/domain/services/messages/createNotification.ts:4](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/json-rpc/source/domain/services/messages/createNotification.ts#L4)*

**Type parameters:**

▪ **A**: *string*

**Parameters:**

Name | Type |
------ | ------ |
`method` | A |

**Returns:** *[JsonRpcNotification](json_rpc.md#jsonrpcnotification)‹A›*

▸ **createNotification**<**A**, **B**>(`method`: A, `params`: B): *[JsonRpcNotification](json_rpc.md#jsonrpcnotification)‹A, B›*

*Defined in [packages/json-rpc/source/domain/services/messages/createNotification.ts:5](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/json-rpc/source/domain/services/messages/createNotification.ts#L5)*

**Type parameters:**

▪ **A**: *string*

▪ **B**: *[StructuredJson](json_rpc.md#structuredjson)*

**Parameters:**

Name | Type |
------ | ------ |
`method` | A |
`params` | B |

**Returns:** *[JsonRpcNotification](json_rpc.md#jsonrpcnotification)‹A, B›*

___

###  createRequest

▸ **createRequest**<**A**>(`id`: [Id](json_rpc.md#id), `method`: A): *[JsonRpcRequest](json_rpc.md#jsonrpcrequest)‹A›*

*Defined in [packages/json-rpc/source/domain/services/messages/createRequest.ts:4](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/json-rpc/source/domain/services/messages/createRequest.ts#L4)*

**Type parameters:**

▪ **A**: *string*

**Parameters:**

Name | Type |
------ | ------ |
`id` | [Id](json_rpc.md#id) |
`method` | A |

**Returns:** *[JsonRpcRequest](json_rpc.md#jsonrpcrequest)‹A›*

▸ **createRequest**<**A**, **B**>(`id`: [Id](json_rpc.md#id), `method`: A, `params`: B): *[JsonRpcRequest](json_rpc.md#jsonrpcrequest)‹A, B›*

*Defined in [packages/json-rpc/source/domain/services/messages/createRequest.ts:5](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/json-rpc/source/domain/services/messages/createRequest.ts#L5)*

**Type parameters:**

▪ **A**: *string*

▪ **B**: *[StructuredJson](json_rpc.md#structuredjson)*

**Parameters:**

Name | Type |
------ | ------ |
`id` | [Id](json_rpc.md#id) |
`method` | A |
`params` | B |

**Returns:** *[JsonRpcRequest](json_rpc.md#jsonrpcrequest)‹A, B›*

___

###  createServer

▸ **createServer**<**E**>(`serverChannel`: [ServerChannel](json_rpc.md#serverchannel)‹E›): *HookEffects‹HooksManagerEnv & [TimerEnv](effects.md#timerenv) & E, [Server](../interfaces/json_rpc.server.md)‹HooksManagerEnv & [TimerEnv](effects.md#timerenv) & E››*

*Defined in [packages/json-rpc/source/infrastructure/createServer.ts:33](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/json-rpc/source/infrastructure/createServer.ts#L33)*

**Type parameters:**

▪ **E**

**Parameters:**

Name | Type |
------ | ------ |
`serverChannel` | [ServerChannel](json_rpc.md#serverchannel)‹E› |

**Returns:** *HookEffects‹HooksManagerEnv & [TimerEnv](effects.md#timerenv) & E, [Server](../interfaces/json_rpc.server.md)‹HooksManagerEnv & [TimerEnv](effects.md#timerenv) & E››*

___

###  createSuccessfulResponse

▸ **createSuccessfulResponse**<**R**>(`requestId`: [Id](json_rpc.md#id), `result`: R): *[JsonRpcSuccessfulResponse](json_rpc.md#jsonrpcsuccessfulresponse)‹R›*

*Defined in [packages/json-rpc/source/domain/services/messages/createSuccessfulResponse.ts:3](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/json-rpc/source/domain/services/messages/createSuccessfulResponse.ts#L3)*

**Type parameters:**

▪ **R**: *[StructuredJson](json_rpc.md#structuredjson)*

**Parameters:**

Name | Type |
------ | ------ |
`requestId` | [Id](json_rpc.md#id) |
`result` | R |

**Returns:** *[JsonRpcSuccessfulResponse](json_rpc.md#jsonrpcsuccessfulresponse)‹R›*

___

### `Const` createTestConnection

▸ **createTestConnection**(`options`: Partial‹[Connection](../interfaces/json_rpc.connection.md)›): *[Connection](../interfaces/json_rpc.connection.md)*

*Defined in [packages/json-rpc/source/infrastructure/createTestServerChannel.ts:26](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/json-rpc/source/infrastructure/createTestServerChannel.ts#L26)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`options` | Partial‹[Connection](../interfaces/json_rpc.connection.md)› | {} |

**Returns:** *[Connection](../interfaces/json_rpc.connection.md)*

___

### `Const` createTestServerChannel

▸ **createTestServerChannel**(`options`: Partial‹[ServerState](json_rpc.md#serverstate)›): *[ServerChannel](json_rpc.md#serverchannel)‹unknown›*

*Defined in [packages/json-rpc/source/infrastructure/createTestServerChannel.ts:7](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/json-rpc/source/infrastructure/createTestServerChannel.ts#L7)*

**Parameters:**

Name | Type |
------ | ------ |
`options` | Partial‹[ServerState](json_rpc.md#serverstate)› |

**Returns:** *[ServerChannel](json_rpc.md#serverchannel)‹unknown›*

___

###  getOppositeDirection

▸ **getOppositeDirection**(`direction`: [MessageDirection](../enums/json_rpc.messagedirection.md)): *[MessageDirection](../enums/json_rpc.messagedirection.md)*

*Defined in [packages/json-rpc/source/domain/services/oppositeDirection.ts:3](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/json-rpc/source/domain/services/oppositeDirection.ts#L3)*

**Parameters:**

Name | Type |
------ | ------ |
`direction` | [MessageDirection](../enums/json_rpc.messagedirection.md) |

**Returns:** *[MessageDirection](../enums/json_rpc.messagedirection.md)*

___

###  getSubscription

▸ **getSubscription**(`direction`: [MessageDirection](../enums/json_rpc.messagedirection.md)): *Effects‹[ConnectionEnv](json_rpc.md#connectionenv), Subscription‹[Message](json_rpc.md#message)››*

*Defined in [packages/json-rpc/source/infrastructure/getSubscription.ts:5](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/json-rpc/source/infrastructure/getSubscription.ts#L5)*

**Parameters:**

Name | Type |
------ | ------ |
`direction` | [MessageDirection](../enums/json_rpc.messagedirection.md) |

**Returns:** *Effects‹[ConnectionEnv](json_rpc.md#connectionenv), Subscription‹[Message](json_rpc.md#message)››*

___

###  isBatchRequest

▸ **isBatchRequest**(`x`: unknown): *x is BatchRequest*

*Defined in [packages/json-rpc/source/domain/services/validations/isBatchRequest.ts:5](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/json-rpc/source/domain/services/validations/isBatchRequest.ts#L5)*

**Parameters:**

Name | Type |
------ | ------ |
`x` | unknown |

**Returns:** *x is BatchRequest*

___

###  isBatchResponse

▸ **isBatchResponse**(`x`: unknown): *x is BatchResponse*

*Defined in [packages/json-rpc/source/domain/services/validations/isBatchResponse.ts:5](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/json-rpc/source/domain/services/validations/isBatchResponse.ts#L5)*

**Parameters:**

Name | Type |
------ | ------ |
`x` | unknown |

**Returns:** *x is BatchResponse*

___

### `Const` isFailedResponse

▸ **isFailedResponse**(`x`: unknown): *x is JsonRpcFailedResponse*

*Defined in [packages/json-rpc/source/domain/services/validations/isResponse.ts:23](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/json-rpc/source/domain/services/validations/isResponse.ts#L23)*

**Parameters:**

Name | Type |
------ | ------ |
`x` | unknown |

**Returns:** *x is JsonRpcFailedResponse*

___

###  isNotification

▸ **isNotification**(`x`: unknown): *x is JsonRpcNotification*

*Defined in [packages/json-rpc/source/domain/services/validations/isNotification.ts:19](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/json-rpc/source/domain/services/validations/isNotification.ts#L19)*

**Parameters:**

Name | Type |
------ | ------ |
`x` | unknown |

**Returns:** *x is JsonRpcNotification*

___

###  isRequest

▸ **isRequest**(`x`: unknown): *x is JsonRpcRequest*

*Defined in [packages/json-rpc/source/domain/services/validations/isRequest.ts:7](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/json-rpc/source/domain/services/validations/isRequest.ts#L7)*

**Parameters:**

Name | Type |
------ | ------ |
`x` | unknown |

**Returns:** *x is JsonRpcRequest*

___

###  isResponse

▸ **isResponse**(`x`: unknown): *x is JsonRpcResponse*

*Defined in [packages/json-rpc/source/domain/services/validations/isResponse.ts:26](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/json-rpc/source/domain/services/validations/isResponse.ts#L26)*

**Parameters:**

Name | Type |
------ | ------ |
`x` | unknown |

**Returns:** *x is JsonRpcResponse*

___

### `Const` isSuccessfulResponse

▸ **isSuccessfulResponse**(`x`: unknown): *x is JsonRpcSuccessfulResponse*

*Defined in [packages/json-rpc/source/domain/services/validations/isResponse.ts:20](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/json-rpc/source/domain/services/validations/isResponse.ts#L20)*

**Parameters:**

Name | Type |
------ | ------ |
`x` | unknown |

**Returns:** *x is JsonRpcSuccessfulResponse*

___

### `Const` sendMessage

▸ **sendMessage**(`message`: object | object | object | object | object[] | object | object[], `direction`: [MessageDirection](../enums/json_rpc.messagedirection.md)): *Generator‹Env‹object, any›, Disposable, any›*

*Defined in [packages/json-rpc/source/infrastructure/sendMessage.ts:4](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/json-rpc/source/infrastructure/sendMessage.ts#L4)*

**Parameters:**

Name | Type |
------ | ------ |
`message` | object &#124; object &#124; object &#124; object &#124; object[] &#124; object &#124; object[] |
`direction` | [MessageDirection](../enums/json_rpc.messagedirection.md) |

**Returns:** *Generator‹Env‹object, any›, Disposable, any›*

___

### `Const` sendRequest

▸ **sendRequest**<**A**, **B**>(`request`: A, `direction`: [MessageDirection](../enums/json_rpc.messagedirection.md)): *Generator‹Env‹object & object & object, any› | Env‹object & object, any›, B, any›*

*Defined in [packages/json-rpc/source/infrastructure/sendRequest.ts:13](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/json-rpc/source/infrastructure/sendRequest.ts#L13)*

**Type parameters:**

▪ **A**: *[JsonRpcRequest](json_rpc.md#jsonrpcrequest)*

▪ **B**: *[JsonRpcResponse](json_rpc.md#jsonrpcresponse)*

**Parameters:**

Name | Type |
------ | ------ |
`request` | A |
`direction` | [MessageDirection](../enums/json_rpc.messagedirection.md) |

**Returns:** *Generator‹Env‹object & object & object, any› | Env‹object & object, any›, B, any›*

___

### `Const` waitForResponse

▸ **waitForResponse**(`requestId`: [Id](json_rpc.md#id), `direction`: [MessageDirection](../enums/json_rpc.messagedirection.md)): *Effects‹[ConnectionEnv](json_rpc.md#connectionenv), [JsonRpcResponse](json_rpc.md#jsonrpcresponse)›*

*Defined in [packages/json-rpc/source/infrastructure/waitForResponse.ts:14](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/json-rpc/source/infrastructure/waitForResponse.ts#L14)*

**Parameters:**

Name | Type |
------ | ------ |
`requestId` | [Id](json_rpc.md#id) |
`direction` | [MessageDirection](../enums/json_rpc.messagedirection.md) |

**Returns:** *Effects‹[ConnectionEnv](json_rpc.md#connectionenv), [JsonRpcResponse](json_rpc.md#jsonrpcresponse)›*

## Object literals

### `Const` VALIDATE_NOTIFICATION_KEYS

### ▪ **VALIDATE_NOTIFICATION_KEYS**: *object*

*Defined in [packages/json-rpc/source/domain/services/validations/isNotification.ts:11](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/json-rpc/source/domain/services/validations/isNotification.ts#L11)*

###  jsonrpc

• **jsonrpc**: *function* = and(isString, equals('2.0'))

*Defined in [packages/json-rpc/source/domain/services/validations/isNotification.ts:14](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/json-rpc/source/domain/services/validations/isNotification.ts#L14)*

#### Type declaration:

▸ (`value`: unknown): *value is A & B*

**Parameters:**

Name | Type |
------ | ------ |
`value` | unknown |

###  method

• **method**: *function* = isString

*Defined in [packages/json-rpc/source/domain/services/validations/isNotification.ts:15](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/json-rpc/source/domain/services/validations/isNotification.ts#L15)*

#### Type declaration:

▸ (`value`: unknown): *value is A*

**Parameters:**

Name | Type |
------ | ------ |
`value` | unknown |

###  params

• **params**: *function* = or(isArray, isObject)

*Defined in [packages/json-rpc/source/domain/services/validations/isNotification.ts:16](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/json-rpc/source/domain/services/validations/isNotification.ts#L16)*

#### Type declaration:

▸ (`value`: unknown): *value is A | B*

**Parameters:**

Name | Type |
------ | ------ |
`value` | unknown |

___

### `Const` VALIDATE_RESPONSE_VALUES

### ▪ **VALIDATE_RESPONSE_VALUES**: *object*

*Defined in [packages/json-rpc/source/domain/services/validations/isResponse.ts:11](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/json-rpc/source/domain/services/validations/isResponse.ts#L11)*

###  error

• **error**: *function* = or(isString, isNumber)

*Defined in [packages/json-rpc/source/domain/services/validations/isResponse.ts:17](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/json-rpc/source/domain/services/validations/isResponse.ts#L17)*

#### Type declaration:

▸ (`value`: unknown): *value is A | B*

**Parameters:**

Name | Type |
------ | ------ |
`value` | unknown |

###  id

• **id**: *function* = or(isString, isNumber)

*Defined in [packages/json-rpc/source/domain/services/validations/isResponse.ts:15](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/json-rpc/source/domain/services/validations/isResponse.ts#L15)*

#### Type declaration:

▸ (`value`: unknown): *value is A | B*

**Parameters:**

Name | Type |
------ | ------ |
`value` | unknown |

###  jsonrpc

• **jsonrpc**: *function* = and(isString, equals('2.0'))

*Defined in [packages/json-rpc/source/domain/services/validations/isResponse.ts:14](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/json-rpc/source/domain/services/validations/isResponse.ts#L14)*

#### Type declaration:

▸ (`value`: unknown): *value is A & B*

**Parameters:**

Name | Type |
------ | ------ |
`value` | unknown |

###  result

• **result**: *function* = or(isArray, isObject)

*Defined in [packages/json-rpc/source/domain/services/validations/isResponse.ts:16](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/json-rpc/source/domain/services/validations/isResponse.ts#L16)*

#### Type declaration:

▸ (`value`: unknown): *value is A | B*

**Parameters:**

Name | Type |
------ | ------ |
`value` | unknown |
