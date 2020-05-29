[Typed - v3.4.1](../README.md) › [Globals](../globals.md) › [node](../modules/node.md) › [MockReadable](node.mockreadable.md)

# Class: MockReadable

## Hierarchy

* Readable

  ↳ **MockReadable**

## Implements

* ReadableStream

## Index

### Constructors

* [constructor](node.mockreadable.md#constructor)

### Properties

* [destroyed](node.mockreadable.md#destroyed)
* [options](node.mockreadable.md#protected-options)
* [readData](node.mockreadable.md#protected-readdata)
* [readable](node.mockreadable.md#readable)
* [readableHighWaterMark](node.mockreadable.md#readonly-readablehighwatermark)
* [readableLength](node.mockreadable.md#readonly-readablelength)
* [readableObjectMode](node.mockreadable.md#readonly-readableobjectmode)
* [writeData](node.mockreadable.md#protected-writedata)

### Methods

* [[Symbol.asyncIterator]](node.mockreadable.md#[symbol.asynciterator])
* [_destroy](node.mockreadable.md#_destroy)
* [_read](node.mockreadable.md#_read)
* [addListener](node.mockreadable.md#addlistener)
* [data](node.mockreadable.md#data)
* [destroy](node.mockreadable.md#destroy)
* [emit](node.mockreadable.md#emit)
* [end](node.mockreadable.md#end)
* [eventNames](node.mockreadable.md#eventnames)
* [getMaxListeners](node.mockreadable.md#getmaxlisteners)
* [isPaused](node.mockreadable.md#ispaused)
* [listenerCount](node.mockreadable.md#listenercount)
* [listeners](node.mockreadable.md#listeners)
* [off](node.mockreadable.md#off)
* [on](node.mockreadable.md#on)
* [once](node.mockreadable.md#once)
* [pause](node.mockreadable.md#pause)
* [pipe](node.mockreadable.md#pipe)
* [prependListener](node.mockreadable.md#prependlistener)
* [prependOnceListener](node.mockreadable.md#prependoncelistener)
* [push](node.mockreadable.md#push)
* [rawListeners](node.mockreadable.md#rawlisteners)
* [read](node.mockreadable.md#read)
* [removeAllListeners](node.mockreadable.md#removealllisteners)
* [removeListener](node.mockreadable.md#removelistener)
* [resume](node.mockreadable.md#resume)
* [setEncoding](node.mockreadable.md#setencoding)
* [setMaxListeners](node.mockreadable.md#setmaxlisteners)
* [unpipe](node.mockreadable.md#unpipe)
* [unshift](node.mockreadable.md#unshift)
* [wrap](node.mockreadable.md#wrap)
* [write](node.mockreadable.md#write)
* [from](node.mockreadable.md#static-from)

## Constructors

###  constructor

\+ **new MockReadable**(`options?`: ReadableOptions): *[MockReadable](node.mockreadable.md)*

*Overrides void*

*Defined in [packages/node/source/stdio/MockReadable.ts:10](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/node/source/stdio/MockReadable.ts#L10)*

**Parameters:**

Name | Type |
------ | ------ |
`options?` | ReadableOptions |

**Returns:** *[MockReadable](node.mockreadable.md)*

## Properties

###  destroyed

• **destroyed**: *boolean*

*Inherited from [MockReadable](node.mockreadable.md).[destroyed](node.mockreadable.md#destroyed)*

Defined in node_modules/@types/node/stream.d.ts:32

___

### `Protected` options

• **options**: *ReadableOptions*

*Defined in [packages/node/source/stdio/MockReadable.ts:10](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/node/source/stdio/MockReadable.ts#L10)*

___

### `Protected` readData

• **readData**: *string[]* = []

*Defined in [packages/node/source/stdio/MockReadable.ts:8](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/node/source/stdio/MockReadable.ts#L8)*

___

###  readable

• **readable**: *boolean*

*Inherited from [MockReadable](node.mockreadable.md).[readable](node.mockreadable.md#readable)*

Defined in node_modules/@types/node/stream.d.ts:28

___

### `Readonly` readableHighWaterMark

• **readableHighWaterMark**: *number*

*Inherited from [MockReadable](node.mockreadable.md).[readableHighWaterMark](node.mockreadable.md#readonly-readablehighwatermark)*

Defined in node_modules/@types/node/stream.d.ts:29

___

### `Readonly` readableLength

• **readableLength**: *number*

*Inherited from [MockReadable](node.mockreadable.md).[readableLength](node.mockreadable.md#readonly-readablelength)*

Defined in node_modules/@types/node/stream.d.ts:30

___

### `Readonly` readableObjectMode

• **readableObjectMode**: *boolean*

*Inherited from [MockReadable](node.mockreadable.md).[readableObjectMode](node.mockreadable.md#readonly-readableobjectmode)*

Defined in node_modules/@types/node/stream.d.ts:31

___

### `Protected` writeData

• **writeData**: *string[]* = []

*Defined in [packages/node/source/stdio/MockReadable.ts:9](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/node/source/stdio/MockReadable.ts#L9)*

## Methods

###  [Symbol.asyncIterator]

▸ **[Symbol.asyncIterator]**(): *AsyncIterableIterator‹any›*

*Inherited from [MockReadable](node.mockreadable.md).[[Symbol.asyncIterator]](node.mockreadable.md#[symbol.asynciterator])*

Defined in node_modules/@types/node/stream.d.ts:121

**Returns:** *AsyncIterableIterator‹any›*

___

###  _destroy

▸ **_destroy**(`error`: [Error](effects.killerror.md#static-error) | null, `callback`: function): *void*

*Inherited from [MockReadable](node.mockreadable.md).[_destroy](node.mockreadable.md#_destroy)*

Defined in node_modules/@types/node/stream.d.ts:44

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

###  _read

▸ **_read**(`size?`: undefined | number): *void*

*Overrides void*

*Defined in [packages/node/source/stdio/MockReadable.ts:18](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/node/source/stdio/MockReadable.ts#L18)*

**Parameters:**

Name | Type |
------ | ------ |
`size?` | undefined &#124; number |

**Returns:** *void*

___

###  addListener

▸ **addListener**(`event`: "close", `listener`: function): *this*

*Inherited from [MockReadable](node.mockreadable.md).[addListener](node.mockreadable.md#addlistener)*

*Overrides void*

Defined in node_modules/@types/node/stream.d.ts:58

Event emitter
The defined events on documents including:
1. close
2. data
3. end
4. error
5. pause
6. readable
7. resume

**Parameters:**

▪ **event**: *"close"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **addListener**(`event`: "data", `listener`: function): *this*

*Inherited from [MockReadable](node.mockreadable.md).[addListener](node.mockreadable.md#addlistener)*

*Overrides void*

Defined in node_modules/@types/node/stream.d.ts:59

**Parameters:**

▪ **event**: *"data"*

▪ **listener**: *function*

▸ (`chunk`: any): *void*

**Parameters:**

Name | Type |
------ | ------ |
`chunk` | any |

**Returns:** *this*

▸ **addListener**(`event`: "end", `listener`: function): *this*

*Inherited from [MockReadable](node.mockreadable.md).[addListener](node.mockreadable.md#addlistener)*

*Overrides void*

Defined in node_modules/@types/node/stream.d.ts:60

**Parameters:**

▪ **event**: *"end"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **addListener**(`event`: "error", `listener`: function): *this*

*Inherited from [MockReadable](node.mockreadable.md).[addListener](node.mockreadable.md#addlistener)*

*Overrides void*

Defined in node_modules/@types/node/stream.d.ts:61

**Parameters:**

▪ **event**: *"error"*

▪ **listener**: *function*

▸ (`err`: [Error](effects.killerror.md#static-error)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [Error](effects.killerror.md#static-error) |

**Returns:** *this*

▸ **addListener**(`event`: "pause", `listener`: function): *this*

*Inherited from [MockReadable](node.mockreadable.md).[addListener](node.mockreadable.md#addlistener)*

*Overrides void*

Defined in node_modules/@types/node/stream.d.ts:62

**Parameters:**

▪ **event**: *"pause"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **addListener**(`event`: "readable", `listener`: function): *this*

*Inherited from [MockReadable](node.mockreadable.md).[addListener](node.mockreadable.md#addlistener)*

*Overrides void*

Defined in node_modules/@types/node/stream.d.ts:63

**Parameters:**

▪ **event**: *"readable"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **addListener**(`event`: "resume", `listener`: function): *this*

*Inherited from [MockReadable](node.mockreadable.md).[addListener](node.mockreadable.md#addlistener)*

*Overrides void*

Defined in node_modules/@types/node/stream.d.ts:64

**Parameters:**

▪ **event**: *"resume"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **addListener**(`event`: string | symbol, `listener`: function): *this*

*Inherited from [MockReadable](node.mockreadable.md).[addListener](node.mockreadable.md#addlistener)*

*Overrides void*

Defined in node_modules/@types/node/stream.d.ts:65

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

###  data

▸ **data**(): *keyof string[]*

*Defined in [packages/node/source/stdio/MockReadable.ts:57](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/node/source/stdio/MockReadable.ts#L57)*

**Returns:** *keyof string[]*

___

###  destroy

▸ **destroy**(`error?`: [Error](../enums/effects.fiberstate.md#error)): *void*

*Inherited from [MockReadable](node.mockreadable.md).[destroy](node.mockreadable.md#destroy)*

Defined in node_modules/@types/node/stream.d.ts:45

**Parameters:**

Name | Type |
------ | ------ |
`error?` | [Error](../enums/effects.fiberstate.md#error) |

**Returns:** *void*

___

###  emit

▸ **emit**(`event`: "close"): *boolean*

*Inherited from [MockReadable](node.mockreadable.md).[emit](node.mockreadable.md#emit)*

*Overrides void*

Defined in node_modules/@types/node/stream.d.ts:67

**Parameters:**

Name | Type |
------ | ------ |
`event` | "close" |

**Returns:** *boolean*

▸ **emit**(`event`: "data", `chunk`: any): *boolean*

*Inherited from [MockReadable](node.mockreadable.md).[emit](node.mockreadable.md#emit)*

*Overrides void*

Defined in node_modules/@types/node/stream.d.ts:68

**Parameters:**

Name | Type |
------ | ------ |
`event` | "data" |
`chunk` | any |

**Returns:** *boolean*

▸ **emit**(`event`: "end"): *boolean*

*Inherited from [MockReadable](node.mockreadable.md).[emit](node.mockreadable.md#emit)*

*Overrides void*

Defined in node_modules/@types/node/stream.d.ts:69

**Parameters:**

Name | Type |
------ | ------ |
`event` | "end" |

**Returns:** *boolean*

▸ **emit**(`event`: "error", `err`: [Error](effects.killerror.md#static-error)): *boolean*

*Inherited from [MockReadable](node.mockreadable.md).[emit](node.mockreadable.md#emit)*

*Overrides void*

Defined in node_modules/@types/node/stream.d.ts:70

**Parameters:**

Name | Type |
------ | ------ |
`event` | "error" |
`err` | [Error](effects.killerror.md#static-error) |

**Returns:** *boolean*

▸ **emit**(`event`: "pause"): *boolean*

*Inherited from [MockReadable](node.mockreadable.md).[emit](node.mockreadable.md#emit)*

*Overrides void*

Defined in node_modules/@types/node/stream.d.ts:71

**Parameters:**

Name | Type |
------ | ------ |
`event` | "pause" |

**Returns:** *boolean*

▸ **emit**(`event`: "readable"): *boolean*

*Inherited from [MockReadable](node.mockreadable.md).[emit](node.mockreadable.md#emit)*

*Overrides void*

Defined in node_modules/@types/node/stream.d.ts:72

**Parameters:**

Name | Type |
------ | ------ |
`event` | "readable" |

**Returns:** *boolean*

▸ **emit**(`event`: "resume"): *boolean*

*Inherited from [MockReadable](node.mockreadable.md).[emit](node.mockreadable.md#emit)*

*Overrides void*

Defined in node_modules/@types/node/stream.d.ts:73

**Parameters:**

Name | Type |
------ | ------ |
`event` | "resume" |

**Returns:** *boolean*

▸ **emit**(`event`: string | symbol, ...`args`: any[]): *boolean*

*Inherited from [MockReadable](node.mockreadable.md).[emit](node.mockreadable.md#emit)*

*Overrides void*

Defined in node_modules/@types/node/stream.d.ts:74

**Parameters:**

Name | Type |
------ | ------ |
`event` | string &#124; symbol |
`...args` | any[] |

**Returns:** *boolean*

___

###  end

▸ **end**(...`args`: any[]): *void*

*Defined in [packages/node/source/stdio/MockReadable.ts:61](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/node/source/stdio/MockReadable.ts#L61)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

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

###  isPaused

▸ **isPaused**(): *boolean*

*Inherited from [MockReadable](node.mockreadable.md).[isPaused](node.mockreadable.md#ispaused)*

Defined in node_modules/@types/node/stream.d.ts:39

**Returns:** *boolean*

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

*Inherited from [MockReadable](node.mockreadable.md).[on](node.mockreadable.md#on)*

*Overrides void*

Defined in node_modules/@types/node/stream.d.ts:76

**Parameters:**

▪ **event**: *"close"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **on**(`event`: "data", `listener`: function): *this*

*Inherited from [MockReadable](node.mockreadable.md).[on](node.mockreadable.md#on)*

*Overrides void*

Defined in node_modules/@types/node/stream.d.ts:77

**Parameters:**

▪ **event**: *"data"*

▪ **listener**: *function*

▸ (`chunk`: any): *void*

**Parameters:**

Name | Type |
------ | ------ |
`chunk` | any |

**Returns:** *this*

▸ **on**(`event`: "end", `listener`: function): *this*

*Inherited from [MockReadable](node.mockreadable.md).[on](node.mockreadable.md#on)*

*Overrides void*

Defined in node_modules/@types/node/stream.d.ts:78

**Parameters:**

▪ **event**: *"end"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **on**(`event`: "error", `listener`: function): *this*

*Inherited from [MockReadable](node.mockreadable.md).[on](node.mockreadable.md#on)*

*Overrides void*

Defined in node_modules/@types/node/stream.d.ts:79

**Parameters:**

▪ **event**: *"error"*

▪ **listener**: *function*

▸ (`err`: [Error](effects.killerror.md#static-error)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [Error](effects.killerror.md#static-error) |

**Returns:** *this*

▸ **on**(`event`: "pause", `listener`: function): *this*

*Inherited from [MockReadable](node.mockreadable.md).[on](node.mockreadable.md#on)*

*Overrides void*

Defined in node_modules/@types/node/stream.d.ts:80

**Parameters:**

▪ **event**: *"pause"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **on**(`event`: "readable", `listener`: function): *this*

*Inherited from [MockReadable](node.mockreadable.md).[on](node.mockreadable.md#on)*

*Overrides void*

Defined in node_modules/@types/node/stream.d.ts:81

**Parameters:**

▪ **event**: *"readable"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **on**(`event`: "resume", `listener`: function): *this*

*Inherited from [MockReadable](node.mockreadable.md).[on](node.mockreadable.md#on)*

*Overrides void*

Defined in node_modules/@types/node/stream.d.ts:82

**Parameters:**

▪ **event**: *"resume"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **on**(`event`: string | symbol, `listener`: function): *this*

*Inherited from [MockReadable](node.mockreadable.md).[on](node.mockreadable.md#on)*

*Overrides void*

Defined in node_modules/@types/node/stream.d.ts:83

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

*Inherited from [MockReadable](node.mockreadable.md).[once](node.mockreadable.md#once)*

*Overrides void*

Defined in node_modules/@types/node/stream.d.ts:85

**Parameters:**

▪ **event**: *"close"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **once**(`event`: "data", `listener`: function): *this*

*Inherited from [MockReadable](node.mockreadable.md).[once](node.mockreadable.md#once)*

*Overrides void*

Defined in node_modules/@types/node/stream.d.ts:86

**Parameters:**

▪ **event**: *"data"*

▪ **listener**: *function*

▸ (`chunk`: any): *void*

**Parameters:**

Name | Type |
------ | ------ |
`chunk` | any |

**Returns:** *this*

▸ **once**(`event`: "end", `listener`: function): *this*

*Inherited from [MockReadable](node.mockreadable.md).[once](node.mockreadable.md#once)*

*Overrides void*

Defined in node_modules/@types/node/stream.d.ts:87

**Parameters:**

▪ **event**: *"end"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **once**(`event`: "error", `listener`: function): *this*

*Inherited from [MockReadable](node.mockreadable.md).[once](node.mockreadable.md#once)*

*Overrides void*

Defined in node_modules/@types/node/stream.d.ts:88

**Parameters:**

▪ **event**: *"error"*

▪ **listener**: *function*

▸ (`err`: [Error](effects.killerror.md#static-error)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [Error](effects.killerror.md#static-error) |

**Returns:** *this*

▸ **once**(`event`: "pause", `listener`: function): *this*

*Inherited from [MockReadable](node.mockreadable.md).[once](node.mockreadable.md#once)*

*Overrides void*

Defined in node_modules/@types/node/stream.d.ts:89

**Parameters:**

▪ **event**: *"pause"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **once**(`event`: "readable", `listener`: function): *this*

*Inherited from [MockReadable](node.mockreadable.md).[once](node.mockreadable.md#once)*

*Overrides void*

Defined in node_modules/@types/node/stream.d.ts:90

**Parameters:**

▪ **event**: *"readable"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **once**(`event`: "resume", `listener`: function): *this*

*Inherited from [MockReadable](node.mockreadable.md).[once](node.mockreadable.md#once)*

*Overrides void*

Defined in node_modules/@types/node/stream.d.ts:91

**Parameters:**

▪ **event**: *"resume"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **once**(`event`: string | symbol, `listener`: function): *this*

*Inherited from [MockReadable](node.mockreadable.md).[once](node.mockreadable.md#once)*

*Overrides void*

Defined in node_modules/@types/node/stream.d.ts:92

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

###  pause

▸ **pause**(): *this*

*Inherited from [MockReadable](node.mockreadable.md).[pause](node.mockreadable.md#pause)*

Defined in node_modules/@types/node/stream.d.ts:37

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

*Inherited from [MockReadable](node.mockreadable.md).[prependListener](node.mockreadable.md#prependlistener)*

*Overrides void*

Defined in node_modules/@types/node/stream.d.ts:94

**Parameters:**

▪ **event**: *"close"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **prependListener**(`event`: "data", `listener`: function): *this*

*Inherited from [MockReadable](node.mockreadable.md).[prependListener](node.mockreadable.md#prependlistener)*

*Overrides void*

Defined in node_modules/@types/node/stream.d.ts:95

**Parameters:**

▪ **event**: *"data"*

▪ **listener**: *function*

▸ (`chunk`: any): *void*

**Parameters:**

Name | Type |
------ | ------ |
`chunk` | any |

**Returns:** *this*

▸ **prependListener**(`event`: "end", `listener`: function): *this*

*Inherited from [MockReadable](node.mockreadable.md).[prependListener](node.mockreadable.md#prependlistener)*

*Overrides void*

Defined in node_modules/@types/node/stream.d.ts:96

**Parameters:**

▪ **event**: *"end"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **prependListener**(`event`: "error", `listener`: function): *this*

*Inherited from [MockReadable](node.mockreadable.md).[prependListener](node.mockreadable.md#prependlistener)*

*Overrides void*

Defined in node_modules/@types/node/stream.d.ts:97

**Parameters:**

▪ **event**: *"error"*

▪ **listener**: *function*

▸ (`err`: [Error](effects.killerror.md#static-error)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [Error](effects.killerror.md#static-error) |

**Returns:** *this*

▸ **prependListener**(`event`: "pause", `listener`: function): *this*

*Inherited from [MockReadable](node.mockreadable.md).[prependListener](node.mockreadable.md#prependlistener)*

*Overrides void*

Defined in node_modules/@types/node/stream.d.ts:98

**Parameters:**

▪ **event**: *"pause"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **prependListener**(`event`: "readable", `listener`: function): *this*

*Inherited from [MockReadable](node.mockreadable.md).[prependListener](node.mockreadable.md#prependlistener)*

*Overrides void*

Defined in node_modules/@types/node/stream.d.ts:99

**Parameters:**

▪ **event**: *"readable"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **prependListener**(`event`: "resume", `listener`: function): *this*

*Inherited from [MockReadable](node.mockreadable.md).[prependListener](node.mockreadable.md#prependlistener)*

*Overrides void*

Defined in node_modules/@types/node/stream.d.ts:100

**Parameters:**

▪ **event**: *"resume"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **prependListener**(`event`: string | symbol, `listener`: function): *this*

*Inherited from [MockReadable](node.mockreadable.md).[prependListener](node.mockreadable.md#prependlistener)*

*Overrides void*

Defined in node_modules/@types/node/stream.d.ts:101

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

*Inherited from [MockReadable](node.mockreadable.md).[prependOnceListener](node.mockreadable.md#prependoncelistener)*

*Overrides void*

Defined in node_modules/@types/node/stream.d.ts:103

**Parameters:**

▪ **event**: *"close"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **prependOnceListener**(`event`: "data", `listener`: function): *this*

*Inherited from [MockReadable](node.mockreadable.md).[prependOnceListener](node.mockreadable.md#prependoncelistener)*

*Overrides void*

Defined in node_modules/@types/node/stream.d.ts:104

**Parameters:**

▪ **event**: *"data"*

▪ **listener**: *function*

▸ (`chunk`: any): *void*

**Parameters:**

Name | Type |
------ | ------ |
`chunk` | any |

**Returns:** *this*

▸ **prependOnceListener**(`event`: "end", `listener`: function): *this*

*Inherited from [MockReadable](node.mockreadable.md).[prependOnceListener](node.mockreadable.md#prependoncelistener)*

*Overrides void*

Defined in node_modules/@types/node/stream.d.ts:105

**Parameters:**

▪ **event**: *"end"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **prependOnceListener**(`event`: "error", `listener`: function): *this*

*Inherited from [MockReadable](node.mockreadable.md).[prependOnceListener](node.mockreadable.md#prependoncelistener)*

*Overrides void*

Defined in node_modules/@types/node/stream.d.ts:106

**Parameters:**

▪ **event**: *"error"*

▪ **listener**: *function*

▸ (`err`: [Error](effects.killerror.md#static-error)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [Error](effects.killerror.md#static-error) |

**Returns:** *this*

▸ **prependOnceListener**(`event`: "pause", `listener`: function): *this*

*Inherited from [MockReadable](node.mockreadable.md).[prependOnceListener](node.mockreadable.md#prependoncelistener)*

*Overrides void*

Defined in node_modules/@types/node/stream.d.ts:107

**Parameters:**

▪ **event**: *"pause"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **prependOnceListener**(`event`: "readable", `listener`: function): *this*

*Inherited from [MockReadable](node.mockreadable.md).[prependOnceListener](node.mockreadable.md#prependoncelistener)*

*Overrides void*

Defined in node_modules/@types/node/stream.d.ts:108

**Parameters:**

▪ **event**: *"readable"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **prependOnceListener**(`event`: "resume", `listener`: function): *this*

*Inherited from [MockReadable](node.mockreadable.md).[prependOnceListener](node.mockreadable.md#prependoncelistener)*

*Overrides void*

Defined in node_modules/@types/node/stream.d.ts:109

**Parameters:**

▪ **event**: *"resume"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **prependOnceListener**(`event`: string | symbol, `listener`: function): *this*

*Inherited from [MockReadable](node.mockreadable.md).[prependOnceListener](node.mockreadable.md#prependoncelistener)*

*Overrides void*

Defined in node_modules/@types/node/stream.d.ts:110

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

###  push

▸ **push**(`chunk`: any, `encoding?`: undefined | string): *boolean*

*Inherited from [MockReadable](node.mockreadable.md).[push](node.mockreadable.md#push)*

Defined in node_modules/@types/node/stream.d.ts:43

**Parameters:**

Name | Type |
------ | ------ |
`chunk` | any |
`encoding?` | undefined &#124; string |

**Returns:** *boolean*

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

###  read

▸ **read**(`size?`: undefined | number): *any*

*Inherited from [MockReadable](node.mockreadable.md).[read](node.mockreadable.md#read)*

Defined in node_modules/@types/node/stream.d.ts:35

**Parameters:**

Name | Type |
------ | ------ |
`size?` | undefined &#124; number |

**Returns:** *any*

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

*Inherited from [MockReadable](node.mockreadable.md).[removeListener](node.mockreadable.md#removelistener)*

*Overrides void*

Defined in node_modules/@types/node/stream.d.ts:112

**Parameters:**

▪ **event**: *"close"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **removeListener**(`event`: "data", `listener`: function): *this*

*Inherited from [MockReadable](node.mockreadable.md).[removeListener](node.mockreadable.md#removelistener)*

*Overrides void*

Defined in node_modules/@types/node/stream.d.ts:113

**Parameters:**

▪ **event**: *"data"*

▪ **listener**: *function*

▸ (`chunk`: any): *void*

**Parameters:**

Name | Type |
------ | ------ |
`chunk` | any |

**Returns:** *this*

▸ **removeListener**(`event`: "end", `listener`: function): *this*

*Inherited from [MockReadable](node.mockreadable.md).[removeListener](node.mockreadable.md#removelistener)*

*Overrides void*

Defined in node_modules/@types/node/stream.d.ts:114

**Parameters:**

▪ **event**: *"end"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **removeListener**(`event`: "error", `listener`: function): *this*

*Inherited from [MockReadable](node.mockreadable.md).[removeListener](node.mockreadable.md#removelistener)*

*Overrides void*

Defined in node_modules/@types/node/stream.d.ts:115

**Parameters:**

▪ **event**: *"error"*

▪ **listener**: *function*

▸ (`err`: [Error](effects.killerror.md#static-error)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [Error](effects.killerror.md#static-error) |

**Returns:** *this*

▸ **removeListener**(`event`: "pause", `listener`: function): *this*

*Inherited from [MockReadable](node.mockreadable.md).[removeListener](node.mockreadable.md#removelistener)*

*Overrides void*

Defined in node_modules/@types/node/stream.d.ts:116

**Parameters:**

▪ **event**: *"pause"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **removeListener**(`event`: "readable", `listener`: function): *this*

*Inherited from [MockReadable](node.mockreadable.md).[removeListener](node.mockreadable.md#removelistener)*

*Overrides void*

Defined in node_modules/@types/node/stream.d.ts:117

**Parameters:**

▪ **event**: *"readable"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **removeListener**(`event`: "resume", `listener`: function): *this*

*Inherited from [MockReadable](node.mockreadable.md).[removeListener](node.mockreadable.md#removelistener)*

*Overrides void*

Defined in node_modules/@types/node/stream.d.ts:118

**Parameters:**

▪ **event**: *"resume"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **removeListener**(`event`: string | symbol, `listener`: function): *this*

*Inherited from [MockReadable](node.mockreadable.md).[removeListener](node.mockreadable.md#removelistener)*

*Overrides void*

Defined in node_modules/@types/node/stream.d.ts:119

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

###  resume

▸ **resume**(): *this*

*Inherited from [MockReadable](node.mockreadable.md).[resume](node.mockreadable.md#resume)*

Defined in node_modules/@types/node/stream.d.ts:38

**Returns:** *this*

___

###  setEncoding

▸ **setEncoding**(`encoding`: string): *this*

*Inherited from [MockReadable](node.mockreadable.md).[setEncoding](node.mockreadable.md#setencoding)*

Defined in node_modules/@types/node/stream.d.ts:36

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

###  unpipe

▸ **unpipe**(`destination?`: NodeJS.WritableStream): *this*

*Inherited from [MockReadable](node.mockreadable.md).[unpipe](node.mockreadable.md#unpipe)*

Defined in node_modules/@types/node/stream.d.ts:40

**Parameters:**

Name | Type |
------ | ------ |
`destination?` | NodeJS.WritableStream |

**Returns:** *this*

___

###  unshift

▸ **unshift**(`chunk`: any, `encoding?`: BufferEncoding): *void*

*Inherited from [MockReadable](node.mockreadable.md).[unshift](node.mockreadable.md#unshift)*

Defined in node_modules/@types/node/stream.d.ts:41

**Parameters:**

Name | Type |
------ | ------ |
`chunk` | any |
`encoding?` | BufferEncoding |

**Returns:** *void*

___

###  wrap

▸ **wrap**(`oldStream`: ReadableStream): *this*

*Inherited from [MockReadable](node.mockreadable.md).[wrap](node.mockreadable.md#wrap)*

Defined in node_modules/@types/node/stream.d.ts:42

**Parameters:**

Name | Type |
------ | ------ |
`oldStream` | ReadableStream |

**Returns:** *this*

___

###  write

▸ **write**(...`data`: string | Buffer‹›[]): *[MockReadable](node.mockreadable.md)*

*Defined in [packages/node/source/stdio/MockReadable.ts:38](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/node/source/stdio/MockReadable.ts#L38)*

**Parameters:**

Name | Type |
------ | ------ |
`...data` | string &#124; Buffer‹›[] |

**Returns:** *[MockReadable](node.mockreadable.md)*

___

### `Static` from

▸ **from**(`iterable`: Iterable‹any› | AsyncIterable‹any›, `options?`: ReadableOptions): *Readable*

*Inherited from [MockReadable](node.mockreadable.md).[from](node.mockreadable.md#static-from)*

Defined in node_modules/@types/node/stream.d.ts:26

A utility method for creating Readable Streams out of iterators.

**Parameters:**

Name | Type |
------ | ------ |
`iterable` | Iterable‹any› &#124; AsyncIterable‹any› |
`options?` | ReadableOptions |

**Returns:** *Readable*
