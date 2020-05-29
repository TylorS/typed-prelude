[Typed - v3.4.1](../README.md) › [Globals](../globals.md) › [node](../modules/node.md) › [MockWritable](node.mockwritable.md)

# Class: MockWritable

## Hierarchy

* Writable

  ↳ **MockWritable**

## Implements

* WritableStream

## Index

### Constructors

* [constructor](node.mockwritable.md#constructor)

### Properties

* [_data](node.mockwritable.md#private-_data)
* [destroyed](node.mockwritable.md#destroyed)
* [writable](node.mockwritable.md#readonly-writable)
* [writableCorked](node.mockwritable.md#readonly-writablecorked)
* [writableEnded](node.mockwritable.md#readonly-writableended)
* [writableFinished](node.mockwritable.md#readonly-writablefinished)
* [writableHighWaterMark](node.mockwritable.md#readonly-writablehighwatermark)
* [writableLength](node.mockwritable.md#readonly-writablelength)
* [writableObjectMode](node.mockwritable.md#readonly-writableobjectmode)

### Methods

* [_destroy](node.mockwritable.md#_destroy)
* [_final](node.mockwritable.md#_final)
* [_write](node.mockwritable.md#_write)
* [_writev](node.mockwritable.md#optional-_writev)
* [addListener](node.mockwritable.md#addlistener)
* [cork](node.mockwritable.md#cork)
* [data](node.mockwritable.md#data)
* [destroy](node.mockwritable.md#destroy)
* [emit](node.mockwritable.md#emit)
* [end](node.mockwritable.md#end)
* [eventNames](node.mockwritable.md#eventnames)
* [getMaxListeners](node.mockwritable.md#getmaxlisteners)
* [listenerCount](node.mockwritable.md#listenercount)
* [listeners](node.mockwritable.md#listeners)
* [off](node.mockwritable.md#off)
* [on](node.mockwritable.md#on)
* [once](node.mockwritable.md#once)
* [pipe](node.mockwritable.md#pipe)
* [prependListener](node.mockwritable.md#prependlistener)
* [prependOnceListener](node.mockwritable.md#prependoncelistener)
* [rawListeners](node.mockwritable.md#rawlisteners)
* [removeAllListeners](node.mockwritable.md#removealllisteners)
* [removeListener](node.mockwritable.md#removelistener)
* [setDefaultEncoding](node.mockwritable.md#setdefaultencoding)
* [setMaxListeners](node.mockwritable.md#setmaxlisteners)
* [uncork](node.mockwritable.md#uncork)
* [write](node.mockwritable.md#write)

## Constructors

###  constructor

\+ **new MockWritable**(`options?`: WritableOptions): *[MockWritable](node.mockwritable.md)*

*Overrides void*

*Defined in [packages/node/source/stdio/MockWritable.ts:5](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/node/source/stdio/MockWritable.ts#L5)*

**Parameters:**

Name | Type |
------ | ------ |
`options?` | WritableOptions |

**Returns:** *[MockWritable](node.mockwritable.md)*

## Properties

### `Private` _data

• **_data**: *any[]* = []

*Defined in [packages/node/source/stdio/MockWritable.ts:5](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/node/source/stdio/MockWritable.ts#L5)*

___

###  destroyed

• **destroyed**: *boolean*

*Inherited from [MockWritable](node.mockwritable.md).[destroyed](node.mockwritable.md#destroyed)*

Defined in node_modules/@types/node/stream.d.ts:145

___

### `Readonly` writable

• **writable**: *boolean*

*Inherited from [MockWritable](node.mockwritable.md).[writable](node.mockwritable.md#readonly-writable)*

Defined in node_modules/@types/node/stream.d.ts:138

___

### `Readonly` writableCorked

• **writableCorked**: *number*

*Inherited from [MockWritable](node.mockwritable.md).[writableCorked](node.mockwritable.md#readonly-writablecorked)*

Defined in node_modules/@types/node/stream.d.ts:144

___

### `Readonly` writableEnded

• **writableEnded**: *boolean*

*Inherited from [MockWritable](node.mockwritable.md).[writableEnded](node.mockwritable.md#readonly-writableended)*

Defined in node_modules/@types/node/stream.d.ts:139

___

### `Readonly` writableFinished

• **writableFinished**: *boolean*

*Inherited from [MockWritable](node.mockwritable.md).[writableFinished](node.mockwritable.md#readonly-writablefinished)*

Defined in node_modules/@types/node/stream.d.ts:140

___

### `Readonly` writableHighWaterMark

• **writableHighWaterMark**: *number*

*Inherited from [MockWritable](node.mockwritable.md).[writableHighWaterMark](node.mockwritable.md#readonly-writablehighwatermark)*

Defined in node_modules/@types/node/stream.d.ts:141

___

### `Readonly` writableLength

• **writableLength**: *number*

*Inherited from [MockWritable](node.mockwritable.md).[writableLength](node.mockwritable.md#readonly-writablelength)*

Defined in node_modules/@types/node/stream.d.ts:142

___

### `Readonly` writableObjectMode

• **writableObjectMode**: *boolean*

*Inherited from [MockWritable](node.mockwritable.md).[writableObjectMode](node.mockwritable.md#readonly-writableobjectmode)*

Defined in node_modules/@types/node/stream.d.ts:143

## Methods

###  _destroy

▸ **_destroy**(`error`: [Error](effects.killerror.md#static-error) | null, `callback`: function): *void*

*Inherited from [MockWritable](node.mockwritable.md).[_destroy](node.mockwritable.md#_destroy)*

Defined in node_modules/@types/node/stream.d.ts:149

**Parameters:**

▪ **error**: *[Error](effects.killerror.md#static-error) | null*

▪ **callback**: *function*

▸ (`error?`: [Error](effects.killerror.md#static-error) | null): *void*

**Parameters:**

Name | Type |
------ | ------ |
`error?` | [Error](effects.killerror.md#static-error) &#124; null |

**Returns:** *void*

___

###  _final

▸ **_final**(`callback`: function): *void*

*Inherited from [MockWritable](node.mockwritable.md).[_final](node.mockwritable.md#_final)*

Defined in node_modules/@types/node/stream.d.ts:150

**Parameters:**

▪ **callback**: *function*

▸ (`error?`: [Error](effects.killerror.md#static-error) | null): *void*

**Parameters:**

Name | Type |
------ | ------ |
`error?` | [Error](effects.killerror.md#static-error) &#124; null |

**Returns:** *void*

___

###  _write

▸ **_write**(`data`: Buffer | string, `encoding`: string, `callback`: Function): *void*

*Overrides void*

*Defined in [packages/node/source/stdio/MockWritable.ts:26](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/node/source/stdio/MockWritable.ts#L26)*

**Parameters:**

Name | Type |
------ | ------ |
`data` | Buffer &#124; string |
`encoding` | string |
`callback` | Function |

**Returns:** *void*

___

### `Optional` _writev

▸ **_writev**(`chunks`: [Array](../interfaces/objects.mutablearray.md#array)‹object›, `callback`: function): *void*

*Inherited from [MockWritable](node.mockwritable.md).[_writev](node.mockwritable.md#optional-_writev)*

Defined in node_modules/@types/node/stream.d.ts:148

**Parameters:**

▪ **chunks**: *[Array](../interfaces/objects.mutablearray.md#array)‹object›*

▪ **callback**: *function*

▸ (`error?`: [Error](effects.killerror.md#static-error) | null): *void*

**Parameters:**

Name | Type |
------ | ------ |
`error?` | [Error](effects.killerror.md#static-error) &#124; null |

**Returns:** *void*

___

###  addListener

▸ **addListener**(`event`: "close", `listener`: function): *this*

*Inherited from [MockWritable](node.mockwritable.md).[addListener](node.mockwritable.md#addlistener)*

*Overrides void*

Defined in node_modules/@types/node/stream.d.ts:171

Event emitter
The defined events on documents including:
1. close
2. drain
3. error
4. finish
5. pipe
6. unpipe

**Parameters:**

▪ **event**: *"close"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **addListener**(`event`: "drain", `listener`: function): *this*

*Inherited from [MockWritable](node.mockwritable.md).[addListener](node.mockwritable.md#addlistener)*

*Overrides void*

Defined in node_modules/@types/node/stream.d.ts:172

**Parameters:**

▪ **event**: *"drain"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **addListener**(`event`: "error", `listener`: function): *this*

*Inherited from [MockWritable](node.mockwritable.md).[addListener](node.mockwritable.md#addlistener)*

*Overrides void*

Defined in node_modules/@types/node/stream.d.ts:173

**Parameters:**

▪ **event**: *"error"*

▪ **listener**: *function*

▸ (`err`: [Error](effects.killerror.md#static-error)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [Error](effects.killerror.md#static-error) |

**Returns:** *this*

▸ **addListener**(`event`: "finish", `listener`: function): *this*

*Inherited from [MockWritable](node.mockwritable.md).[addListener](node.mockwritable.md#addlistener)*

*Overrides void*

Defined in node_modules/@types/node/stream.d.ts:174

**Parameters:**

▪ **event**: *"finish"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **addListener**(`event`: "pipe", `listener`: function): *this*

*Inherited from [MockWritable](node.mockwritable.md).[addListener](node.mockwritable.md#addlistener)*

*Overrides void*

Defined in node_modules/@types/node/stream.d.ts:175

**Parameters:**

▪ **event**: *"pipe"*

▪ **listener**: *function*

▸ (`src`: Readable): *void*

**Parameters:**

Name | Type |
------ | ------ |
`src` | Readable |

**Returns:** *this*

▸ **addListener**(`event`: "unpipe", `listener`: function): *this*

*Inherited from [MockWritable](node.mockwritable.md).[addListener](node.mockwritable.md#addlistener)*

*Overrides void*

Defined in node_modules/@types/node/stream.d.ts:176

**Parameters:**

▪ **event**: *"unpipe"*

▪ **listener**: *function*

▸ (`src`: Readable): *void*

**Parameters:**

Name | Type |
------ | ------ |
`src` | Readable |

**Returns:** *this*

▸ **addListener**(`event`: string | symbol, `listener`: function): *this*

*Inherited from [MockWritable](node.mockwritable.md).[addListener](node.mockwritable.md#addlistener)*

*Overrides void*

Defined in node_modules/@types/node/stream.d.ts:177

**Parameters:**

▪ **event**: *string | symbol*

▪ **listener**: *function*

▸ (...`args`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *this*

___

###  cork

▸ **cork**(): *void*

*Inherited from [MockWritable](node.mockwritable.md).[cork](node.mockwritable.md#cork)*

Defined in node_modules/@types/node/stream.d.ts:157

**Returns:** *void*

___

###  data

▸ **data**(): *any[]*

*Defined in [packages/node/source/stdio/MockWritable.ts:22](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/node/source/stdio/MockWritable.ts#L22)*

**Returns:** *any[]*

___

###  destroy

▸ **destroy**(`error?`: [Error](../enums/effects.fiberstate.md#error)): *void*

*Inherited from [MockWritable](node.mockwritable.md).[destroy](node.mockwritable.md#destroy)*

Defined in node_modules/@types/node/stream.d.ts:159

**Parameters:**

Name | Type |
------ | ------ |
`error?` | [Error](../enums/effects.fiberstate.md#error) |

**Returns:** *void*

___

###  emit

▸ **emit**(`event`: "close"): *boolean*

*Inherited from [MockWritable](node.mockwritable.md).[emit](node.mockwritable.md#emit)*

*Overrides void*

Defined in node_modules/@types/node/stream.d.ts:179

**Parameters:**

Name | Type |
------ | ------ |
`event` | "close" |

**Returns:** *boolean*

▸ **emit**(`event`: "drain"): *boolean*

*Inherited from [MockWritable](node.mockwritable.md).[emit](node.mockwritable.md#emit)*

*Overrides void*

Defined in node_modules/@types/node/stream.d.ts:180

**Parameters:**

Name | Type |
------ | ------ |
`event` | "drain" |

**Returns:** *boolean*

▸ **emit**(`event`: "error", `err`: [Error](effects.killerror.md#static-error)): *boolean*

*Inherited from [MockWritable](node.mockwritable.md).[emit](node.mockwritable.md#emit)*

*Overrides void*

Defined in node_modules/@types/node/stream.d.ts:181

**Parameters:**

Name | Type |
------ | ------ |
`event` | "error" |
`err` | [Error](effects.killerror.md#static-error) |

**Returns:** *boolean*

▸ **emit**(`event`: "finish"): *boolean*

*Inherited from [MockWritable](node.mockwritable.md).[emit](node.mockwritable.md#emit)*

*Overrides void*

Defined in node_modules/@types/node/stream.d.ts:182

**Parameters:**

Name | Type |
------ | ------ |
`event` | "finish" |

**Returns:** *boolean*

▸ **emit**(`event`: "pipe", `src`: Readable): *boolean*

*Inherited from [MockWritable](node.mockwritable.md).[emit](node.mockwritable.md#emit)*

*Overrides void*

Defined in node_modules/@types/node/stream.d.ts:183

**Parameters:**

Name | Type |
------ | ------ |
`event` | "pipe" |
`src` | Readable |

**Returns:** *boolean*

▸ **emit**(`event`: "unpipe", `src`: Readable): *boolean*

*Inherited from [MockWritable](node.mockwritable.md).[emit](node.mockwritable.md#emit)*

*Overrides void*

Defined in node_modules/@types/node/stream.d.ts:184

**Parameters:**

Name | Type |
------ | ------ |
`event` | "unpipe" |
`src` | Readable |

**Returns:** *boolean*

▸ **emit**(`event`: string | symbol, ...`args`: any[]): *boolean*

*Inherited from [MockWritable](node.mockwritable.md).[emit](node.mockwritable.md#emit)*

*Overrides void*

Defined in node_modules/@types/node/stream.d.ts:185

**Parameters:**

Name | Type |
------ | ------ |
`event` | string &#124; symbol |
`...args` | any[] |

**Returns:** *boolean*

___

###  end

▸ **end**(): *void*

*Overrides void*

*Defined in [packages/node/source/stdio/MockWritable.ts:11](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/node/source/stdio/MockWritable.ts#L11)*

**Returns:** *void*

___

###  eventNames

▸ **eventNames**(): *[Array](../interfaces/objects.mutablearray.md#array)‹string | symbol›*

*Inherited from [MockReadable](node.mockreadable.md).[eventNames](node.mockreadable.md#eventnames)*

Defined in node_modules/@types/node/globals.d.ts:568

**Returns:** *[Array](../interfaces/objects.mutablearray.md#array)‹string | symbol›*

___

###  getMaxListeners

▸ **getMaxListeners**(): *number*

*Inherited from [MockReadable](node.mockreadable.md).[getMaxListeners](node.mockreadable.md#getmaxlisteners)*

Defined in node_modules/@types/node/globals.d.ts:560

**Returns:** *number*

___

###  listenerCount

▸ **listenerCount**(`type`: string | symbol): *number*

*Inherited from [MockReadable](node.mockreadable.md).[listenerCount](node.mockreadable.md#listenercount)*

Defined in node_modules/@types/node/globals.d.ts:564

**Parameters:**

Name | Type |
------ | ------ |
`type` | string &#124; symbol |

**Returns:** *number*

___

###  listeners

▸ **listeners**(`event`: string | symbol): *Function[]*

*Inherited from [MockReadable](node.mockreadable.md).[listeners](node.mockreadable.md#listeners)*

Defined in node_modules/@types/node/globals.d.ts:561

**Parameters:**

Name | Type |
------ | ------ |
`event` | string &#124; symbol |

**Returns:** *Function[]*

___

###  off

▸ **off**(`event`: string | symbol, `listener`: function): *this*

*Inherited from [MockReadable](node.mockreadable.md).[off](node.mockreadable.md#off)*

Defined in node_modules/@types/node/globals.d.ts:557

**Parameters:**

▪ **event**: *string | symbol*

▪ **listener**: *function*

▸ (...`args`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *this*

___

###  on

▸ **on**(`event`: "close", `listener`: function): *this*

*Inherited from [MockWritable](node.mockwritable.md).[on](node.mockwritable.md#on)*

*Overrides void*

Defined in node_modules/@types/node/stream.d.ts:187

**Parameters:**

▪ **event**: *"close"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **on**(`event`: "drain", `listener`: function): *this*

*Inherited from [MockWritable](node.mockwritable.md).[on](node.mockwritable.md#on)*

*Overrides void*

Defined in node_modules/@types/node/stream.d.ts:188

**Parameters:**

▪ **event**: *"drain"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **on**(`event`: "error", `listener`: function): *this*

*Inherited from [MockWritable](node.mockwritable.md).[on](node.mockwritable.md#on)*

*Overrides void*

Defined in node_modules/@types/node/stream.d.ts:189

**Parameters:**

▪ **event**: *"error"*

▪ **listener**: *function*

▸ (`err`: [Error](effects.killerror.md#static-error)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [Error](effects.killerror.md#static-error) |

**Returns:** *this*

▸ **on**(`event`: "finish", `listener`: function): *this*

*Inherited from [MockWritable](node.mockwritable.md).[on](node.mockwritable.md#on)*

*Overrides void*

Defined in node_modules/@types/node/stream.d.ts:190

**Parameters:**

▪ **event**: *"finish"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **on**(`event`: "pipe", `listener`: function): *this*

*Inherited from [MockWritable](node.mockwritable.md).[on](node.mockwritable.md#on)*

*Overrides void*

Defined in node_modules/@types/node/stream.d.ts:191

**Parameters:**

▪ **event**: *"pipe"*

▪ **listener**: *function*

▸ (`src`: Readable): *void*

**Parameters:**

Name | Type |
------ | ------ |
`src` | Readable |

**Returns:** *this*

▸ **on**(`event`: "unpipe", `listener`: function): *this*

*Inherited from [MockWritable](node.mockwritable.md).[on](node.mockwritable.md#on)*

*Overrides void*

Defined in node_modules/@types/node/stream.d.ts:192

**Parameters:**

▪ **event**: *"unpipe"*

▪ **listener**: *function*

▸ (`src`: Readable): *void*

**Parameters:**

Name | Type |
------ | ------ |
`src` | Readable |

**Returns:** *this*

▸ **on**(`event`: string | symbol, `listener`: function): *this*

*Inherited from [MockWritable](node.mockwritable.md).[on](node.mockwritable.md#on)*

*Overrides void*

Defined in node_modules/@types/node/stream.d.ts:193

**Parameters:**

▪ **event**: *string | symbol*

▪ **listener**: *function*

▸ (...`args`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *this*

___

###  once

▸ **once**(`event`: "close", `listener`: function): *this*

*Inherited from [MockWritable](node.mockwritable.md).[once](node.mockwritable.md#once)*

*Overrides void*

Defined in node_modules/@types/node/stream.d.ts:195

**Parameters:**

▪ **event**: *"close"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **once**(`event`: "drain", `listener`: function): *this*

*Inherited from [MockWritable](node.mockwritable.md).[once](node.mockwritable.md#once)*

*Overrides void*

Defined in node_modules/@types/node/stream.d.ts:196

**Parameters:**

▪ **event**: *"drain"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **once**(`event`: "error", `listener`: function): *this*

*Inherited from [MockWritable](node.mockwritable.md).[once](node.mockwritable.md#once)*

*Overrides void*

Defined in node_modules/@types/node/stream.d.ts:197

**Parameters:**

▪ **event**: *"error"*

▪ **listener**: *function*

▸ (`err`: [Error](effects.killerror.md#static-error)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [Error](effects.killerror.md#static-error) |

**Returns:** *this*

▸ **once**(`event`: "finish", `listener`: function): *this*

*Inherited from [MockWritable](node.mockwritable.md).[once](node.mockwritable.md#once)*

*Overrides void*

Defined in node_modules/@types/node/stream.d.ts:198

**Parameters:**

▪ **event**: *"finish"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **once**(`event`: "pipe", `listener`: function): *this*

*Inherited from [MockWritable](node.mockwritable.md).[once](node.mockwritable.md#once)*

*Overrides void*

Defined in node_modules/@types/node/stream.d.ts:199

**Parameters:**

▪ **event**: *"pipe"*

▪ **listener**: *function*

▸ (`src`: Readable): *void*

**Parameters:**

Name | Type |
------ | ------ |
`src` | Readable |

**Returns:** *this*

▸ **once**(`event`: "unpipe", `listener`: function): *this*

*Inherited from [MockWritable](node.mockwritable.md).[once](node.mockwritable.md#once)*

*Overrides void*

Defined in node_modules/@types/node/stream.d.ts:200

**Parameters:**

▪ **event**: *"unpipe"*

▪ **listener**: *function*

▸ (`src`: Readable): *void*

**Parameters:**

Name | Type |
------ | ------ |
`src` | Readable |

**Returns:** *this*

▸ **once**(`event`: string | symbol, `listener`: function): *this*

*Inherited from [MockWritable](node.mockwritable.md).[once](node.mockwritable.md#once)*

*Overrides void*

Defined in node_modules/@types/node/stream.d.ts:201

**Parameters:**

▪ **event**: *string | symbol*

▪ **listener**: *function*

▸ (...`args`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *this*

___

###  pipe

▸ **pipe**<**T**>(`destination`: T, `options?`: undefined | object): *T*

*Inherited from [MockReadable](node.mockreadable.md).[pipe](node.mockreadable.md#pipe)*

Defined in node_modules/@types/node/stream.d.ts:5

**Type parameters:**

▪ **T**: *WritableStream*

**Parameters:**

Name | Type |
------ | ------ |
`destination` | T |
`options?` | undefined &#124; object |

**Returns:** *T*

___

###  prependListener

▸ **prependListener**(`event`: "close", `listener`: function): *this*

*Inherited from [MockWritable](node.mockwritable.md).[prependListener](node.mockwritable.md#prependlistener)*

*Overrides void*

Defined in node_modules/@types/node/stream.d.ts:203

**Parameters:**

▪ **event**: *"close"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **prependListener**(`event`: "drain", `listener`: function): *this*

*Inherited from [MockWritable](node.mockwritable.md).[prependListener](node.mockwritable.md#prependlistener)*

*Overrides void*

Defined in node_modules/@types/node/stream.d.ts:204

**Parameters:**

▪ **event**: *"drain"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **prependListener**(`event`: "error", `listener`: function): *this*

*Inherited from [MockWritable](node.mockwritable.md).[prependListener](node.mockwritable.md#prependlistener)*

*Overrides void*

Defined in node_modules/@types/node/stream.d.ts:205

**Parameters:**

▪ **event**: *"error"*

▪ **listener**: *function*

▸ (`err`: [Error](effects.killerror.md#static-error)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [Error](effects.killerror.md#static-error) |

**Returns:** *this*

▸ **prependListener**(`event`: "finish", `listener`: function): *this*

*Inherited from [MockWritable](node.mockwritable.md).[prependListener](node.mockwritable.md#prependlistener)*

*Overrides void*

Defined in node_modules/@types/node/stream.d.ts:206

**Parameters:**

▪ **event**: *"finish"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **prependListener**(`event`: "pipe", `listener`: function): *this*

*Inherited from [MockWritable](node.mockwritable.md).[prependListener](node.mockwritable.md#prependlistener)*

*Overrides void*

Defined in node_modules/@types/node/stream.d.ts:207

**Parameters:**

▪ **event**: *"pipe"*

▪ **listener**: *function*

▸ (`src`: Readable): *void*

**Parameters:**

Name | Type |
------ | ------ |
`src` | Readable |

**Returns:** *this*

▸ **prependListener**(`event`: "unpipe", `listener`: function): *this*

*Inherited from [MockWritable](node.mockwritable.md).[prependListener](node.mockwritable.md#prependlistener)*

*Overrides void*

Defined in node_modules/@types/node/stream.d.ts:208

**Parameters:**

▪ **event**: *"unpipe"*

▪ **listener**: *function*

▸ (`src`: Readable): *void*

**Parameters:**

Name | Type |
------ | ------ |
`src` | Readable |

**Returns:** *this*

▸ **prependListener**(`event`: string | symbol, `listener`: function): *this*

*Inherited from [MockWritable](node.mockwritable.md).[prependListener](node.mockwritable.md#prependlistener)*

*Overrides void*

Defined in node_modules/@types/node/stream.d.ts:209

**Parameters:**

▪ **event**: *string | symbol*

▪ **listener**: *function*

▸ (...`args`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *this*

___

###  prependOnceListener

▸ **prependOnceListener**(`event`: "close", `listener`: function): *this*

*Inherited from [MockWritable](node.mockwritable.md).[prependOnceListener](node.mockwritable.md#prependoncelistener)*

*Overrides void*

Defined in node_modules/@types/node/stream.d.ts:211

**Parameters:**

▪ **event**: *"close"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **prependOnceListener**(`event`: "drain", `listener`: function): *this*

*Inherited from [MockWritable](node.mockwritable.md).[prependOnceListener](node.mockwritable.md#prependoncelistener)*

*Overrides void*

Defined in node_modules/@types/node/stream.d.ts:212

**Parameters:**

▪ **event**: *"drain"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **prependOnceListener**(`event`: "error", `listener`: function): *this*

*Inherited from [MockWritable](node.mockwritable.md).[prependOnceListener](node.mockwritable.md#prependoncelistener)*

*Overrides void*

Defined in node_modules/@types/node/stream.d.ts:213

**Parameters:**

▪ **event**: *"error"*

▪ **listener**: *function*

▸ (`err`: [Error](effects.killerror.md#static-error)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [Error](effects.killerror.md#static-error) |

**Returns:** *this*

▸ **prependOnceListener**(`event`: "finish", `listener`: function): *this*

*Inherited from [MockWritable](node.mockwritable.md).[prependOnceListener](node.mockwritable.md#prependoncelistener)*

*Overrides void*

Defined in node_modules/@types/node/stream.d.ts:214

**Parameters:**

▪ **event**: *"finish"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **prependOnceListener**(`event`: "pipe", `listener`: function): *this*

*Inherited from [MockWritable](node.mockwritable.md).[prependOnceListener](node.mockwritable.md#prependoncelistener)*

*Overrides void*

Defined in node_modules/@types/node/stream.d.ts:215

**Parameters:**

▪ **event**: *"pipe"*

▪ **listener**: *function*

▸ (`src`: Readable): *void*

**Parameters:**

Name | Type |
------ | ------ |
`src` | Readable |

**Returns:** *this*

▸ **prependOnceListener**(`event`: "unpipe", `listener`: function): *this*

*Inherited from [MockWritable](node.mockwritable.md).[prependOnceListener](node.mockwritable.md#prependoncelistener)*

*Overrides void*

Defined in node_modules/@types/node/stream.d.ts:216

**Parameters:**

▪ **event**: *"unpipe"*

▪ **listener**: *function*

▸ (`src`: Readable): *void*

**Parameters:**

Name | Type |
------ | ------ |
`src` | Readable |

**Returns:** *this*

▸ **prependOnceListener**(`event`: string | symbol, `listener`: function): *this*

*Inherited from [MockWritable](node.mockwritable.md).[prependOnceListener](node.mockwritable.md#prependoncelistener)*

*Overrides void*

Defined in node_modules/@types/node/stream.d.ts:217

**Parameters:**

▪ **event**: *string | symbol*

▪ **listener**: *function*

▸ (...`args`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *this*

___

###  rawListeners

▸ **rawListeners**(`event`: string | symbol): *Function[]*

*Inherited from [MockReadable](node.mockreadable.md).[rawListeners](node.mockreadable.md#rawlisteners)*

Defined in node_modules/@types/node/globals.d.ts:562

**Parameters:**

Name | Type |
------ | ------ |
`event` | string &#124; symbol |

**Returns:** *Function[]*

___

###  removeAllListeners

▸ **removeAllListeners**(`event?`: string | symbol): *this*

*Inherited from [MockReadable](node.mockreadable.md).[removeAllListeners](node.mockreadable.md#removealllisteners)*

Defined in node_modules/@types/node/globals.d.ts:558

**Parameters:**

Name | Type |
------ | ------ |
`event?` | string &#124; symbol |

**Returns:** *this*

___

###  removeListener

▸ **removeListener**(`event`: "close", `listener`: function): *this*

*Inherited from [MockWritable](node.mockwritable.md).[removeListener](node.mockwritable.md#removelistener)*

*Overrides void*

Defined in node_modules/@types/node/stream.d.ts:219

**Parameters:**

▪ **event**: *"close"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **removeListener**(`event`: "drain", `listener`: function): *this*

*Inherited from [MockWritable](node.mockwritable.md).[removeListener](node.mockwritable.md#removelistener)*

*Overrides void*

Defined in node_modules/@types/node/stream.d.ts:220

**Parameters:**

▪ **event**: *"drain"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **removeListener**(`event`: "error", `listener`: function): *this*

*Inherited from [MockWritable](node.mockwritable.md).[removeListener](node.mockwritable.md#removelistener)*

*Overrides void*

Defined in node_modules/@types/node/stream.d.ts:221

**Parameters:**

▪ **event**: *"error"*

▪ **listener**: *function*

▸ (`err`: [Error](effects.killerror.md#static-error)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [Error](effects.killerror.md#static-error) |

**Returns:** *this*

▸ **removeListener**(`event`: "finish", `listener`: function): *this*

*Inherited from [MockWritable](node.mockwritable.md).[removeListener](node.mockwritable.md#removelistener)*

*Overrides void*

Defined in node_modules/@types/node/stream.d.ts:222

**Parameters:**

▪ **event**: *"finish"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **removeListener**(`event`: "pipe", `listener`: function): *this*

*Inherited from [MockWritable](node.mockwritable.md).[removeListener](node.mockwritable.md#removelistener)*

*Overrides void*

Defined in node_modules/@types/node/stream.d.ts:223

**Parameters:**

▪ **event**: *"pipe"*

▪ **listener**: *function*

▸ (`src`: Readable): *void*

**Parameters:**

Name | Type |
------ | ------ |
`src` | Readable |

**Returns:** *this*

▸ **removeListener**(`event`: "unpipe", `listener`: function): *this*

*Inherited from [MockWritable](node.mockwritable.md).[removeListener](node.mockwritable.md#removelistener)*

*Overrides void*

Defined in node_modules/@types/node/stream.d.ts:224

**Parameters:**

▪ **event**: *"unpipe"*

▪ **listener**: *function*

▸ (`src`: Readable): *void*

**Parameters:**

Name | Type |
------ | ------ |
`src` | Readable |

**Returns:** *this*

▸ **removeListener**(`event`: string | symbol, `listener`: function): *this*

*Inherited from [MockWritable](node.mockwritable.md).[removeListener](node.mockwritable.md#removelistener)*

*Overrides void*

Defined in node_modules/@types/node/stream.d.ts:225

**Parameters:**

▪ **event**: *string | symbol*

▪ **listener**: *function*

▸ (...`args`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *this*

___

###  setDefaultEncoding

▸ **setDefaultEncoding**(`encoding`: string): *this*

*Inherited from [MockWritable](node.mockwritable.md).[setDefaultEncoding](node.mockwritable.md#setdefaultencoding)*

Defined in node_modules/@types/node/stream.d.ts:153

**Parameters:**

Name | Type |
------ | ------ |
`encoding` | string |

**Returns:** *this*

___

###  setMaxListeners

▸ **setMaxListeners**(`n`: number): *this*

*Inherited from [MockReadable](node.mockreadable.md).[setMaxListeners](node.mockreadable.md#setmaxlisteners)*

Defined in node_modules/@types/node/globals.d.ts:559

**Parameters:**

Name | Type |
------ | ------ |
`n` | number |

**Returns:** *this*

___

###  uncork

▸ **uncork**(): *void*

*Inherited from [MockWritable](node.mockwritable.md).[uncork](node.mockwritable.md#uncork)*

Defined in node_modules/@types/node/stream.d.ts:158

**Returns:** *void*

___

###  write

▸ **write**(`data`: Buffer | string): *boolean*

*Overrides void*

*Defined in [packages/node/source/stdio/MockWritable.ts:16](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/node/source/stdio/MockWritable.ts#L16)*

**Parameters:**

Name | Type |
------ | ------ |
`data` | Buffer &#124; string |

**Returns:** *boolean*
