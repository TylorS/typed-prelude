[Typed - v3.4.1](../README.md) › [Globals](../globals.md) › [dom](dom.md)

# Package: dom

# @typed/dom

`@typed/dom` is a small packages which makes it easy to avoid the usage of DOM globals and provides 
basic DOM functionality, using [basicHTML](https://github.com/webreflection/basichtml), to Node environments.

> [basicHTML](https://github.com/webreflection/basichtml) is a peer dependency only required for node support.

## Index

### Enumerations

* [NodeFilter](../enums/dom.nodefilter.md)

### Classes

* [NodeFilterImplementation](../classes/dom.nodefilterimplementation.md)
* [NodeIteratorImpl](../classes/dom.nodeiteratorimpl.md)
* [TreeWalkerImpl](../classes/dom.treewalkerimpl.md)

### Interfaces

* [DomEnv](../interfaces/dom.domenv.md)

### Type aliases

* [CreateServerDomEnvOptions](dom.md#createserverdomenvoptions)
* [INodeFilter](dom.md#inodefilter)

### Variables

* [POPSTATE_EVENT_TYPE](dom.md#const-popstate_event_type)
* [UNDEFINED](dom.md#const-undefined)

### Functions

* [addEventListener](dom.md#addeventlistener)
* [checkCanUseCustomElements](dom.md#const-checkcanusecustomelements)
* [checkCanUseDocument](dom.md#const-checkcanusedocument)
* [checkCanUseHistory](dom.md#const-checkcanusehistory)
* [checkCanUseLocalStorage](dom.md#const-checkcanuselocalstorage)
* [checkCanUseLocation](dom.md#const-checkcanuselocation)
* [checkCanUseMatchMedia](dom.md#const-checkcanusematchmedia)
* [checkCanUseNavigator](dom.md#const-checkcanusenavigator)
* [checkCanUseNotification](dom.md#const-checkcanusenotification)
* [checkCanUseServiceWorker](dom.md#const-checkcanuseserviceworker)
* [checkCanUseSessionStorage](dom.md#const-checkcanusesessionstorage)
* [checkCanUseWindow](dom.md#const-checkcanusewindow)
* [checkCanUseXhr](dom.md#const-checkcanusexhr)
* [createDomEnv](dom.md#createdomenv)
* [createMatchMedia](dom.md#creatematchmedia)
* [createServerDomEnv](dom.md#createserverdomenv)
* [handleHistoryChange](dom.md#handlehistorychange)
* [querySelector](dom.md#queryselector)
* [querySelectorAll](dom.md#queryselectorall)

## Type aliases

###  CreateServerDomEnvOptions

Ƭ **CreateServerDomEnvOptions**: *object*

*Defined in [packages/dom/source/createServerDomEnv.ts:9](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/dom/source/createServerDomEnv.ts#L9)*

#### Type declaration:

* **customElements**? : *CustomElementRegistry*

* **innerHeight**? : *undefined | number*

* **innerWidth**? : *undefined | number*

* **localStorage**? : *Map‹string, string›*

* **mediaType**? : *undefined | string*

* **serverUrl**? : *undefined | string*

* **sessionStorage**? : *Map‹string, string›*

* **setGlobals**? : *undefined | false | true*

* **window**? : *any*

___

###  INodeFilter

Ƭ **INodeFilter**: *NodeFilter*

*Defined in [packages/dom/source/types.ts:17](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/dom/source/types.ts#L17)*

## Variables

### `Const` POPSTATE_EVENT_TYPE

• **POPSTATE_EVENT_TYPE**: *"popstate"* = "popstate"

*Defined in [packages/dom/source/createServerDomEnv.ts:21](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/dom/source/createServerDomEnv.ts#L21)*

___

### `Const` UNDEFINED

• **UNDEFINED**: *"undefined"* = "undefined"

*Defined in [packages/dom/source/checks.ts:1](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/dom/source/checks.ts#L1)*

## Functions

###  addEventListener

▸ **addEventListener**<**A**, **B**>(`eventType`: A, `node`: B, `listener`: function, `options?`: AddEventListenerOptions): *Disposable*

*Defined in [packages/dom/source/addEventListener.ts:3](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/dom/source/addEventListener.ts#L3)*

**Type parameters:**

▪ **A**: *keyof WindowEventHandlersEventMap*

▪ **B**: *[Window](timer.md#window)*

**Parameters:**

▪ **eventType**: *A*

▪ **node**: *B*

▪ **listener**: *function*

▸ (`event`: WindowEventHandlersEventMap[A] & object): *void*

**Parameters:**

Name | Type |
------ | ------ |
`event` | WindowEventHandlersEventMap[A] & object |

▪`Optional`  **options**: *AddEventListenerOptions*

**Returns:** *Disposable*

▸ **addEventListener**<**A**, **B**>(`eventType`: A, `node`: B, `listener`: function, `options?`: AddEventListenerOptions): *Disposable*

*Defined in [packages/dom/source/addEventListener.ts:10](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/dom/source/addEventListener.ts#L10)*

**Type parameters:**

▪ **A**: *keyof SVGElementEventMap*

▪ **B**: *SVGElement*

**Parameters:**

▪ **eventType**: *A*

▪ **node**: *B*

▪ **listener**: *function*

▸ (`event`: SVGElementEventMap[A] & object): *void*

**Parameters:**

Name | Type |
------ | ------ |
`event` | SVGElementEventMap[A] & object |

▪`Optional`  **options**: *AddEventListenerOptions*

**Returns:** *Disposable*

▸ **addEventListener**<**A**, **B**>(`eventType`: A, `node`: B, `listener`: function, `options?`: AddEventListenerOptions): *Disposable*

*Defined in [packages/dom/source/addEventListener.ts:17](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/dom/source/addEventListener.ts#L17)*

**Type parameters:**

▪ **A**: *keyof HTMLElementEventMap*

▪ **B**: *HTMLElement*

**Parameters:**

▪ **eventType**: *A*

▪ **node**: *B*

▪ **listener**: *function*

▸ (`event`: HTMLElementEventMap[A] & object): *void*

**Parameters:**

Name | Type |
------ | ------ |
`event` | HTMLElementEventMap[A] & object |

▪`Optional`  **options**: *AddEventListenerOptions*

**Returns:** *Disposable*

▸ **addEventListener**<**A**, **B**>(`eventType`: A, `node`: B, `listener`: function, `options?`: AddEventListenerOptions): *Disposable*

*Defined in [packages/dom/source/addEventListener.ts:24](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/dom/source/addEventListener.ts#L24)*

**Type parameters:**

▪ **A**: *keyof ElementEventMap*

▪ **B**: *Element*

**Parameters:**

▪ **eventType**: *A*

▪ **node**: *B*

▪ **listener**: *function*

▸ (`event`: ElementEventMap[A] & object): *void*

**Parameters:**

Name | Type |
------ | ------ |
`event` | ElementEventMap[A] & object |

▪`Optional`  **options**: *AddEventListenerOptions*

**Returns:** *Disposable*

▸ **addEventListener**<**A**>(`eventType`: string, `node`: A, `listener`: function, `options?`: AddEventListenerOptions): *Disposable*

*Defined in [packages/dom/source/addEventListener.ts:31](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/dom/source/addEventListener.ts#L31)*

**Type parameters:**

▪ **A**: *EventTarget*

**Parameters:**

▪ **eventType**: *string*

▪ **node**: *A*

▪ **listener**: *function*

▸ (`event`: Event & object): *void*

**Parameters:**

Name | Type |
------ | ------ |
`event` | Event & object |

▪`Optional`  **options**: *AddEventListenerOptions*

**Returns:** *Disposable*

___

### `Const` checkCanUseCustomElements

▸ **checkCanUseCustomElements**(): *boolean*

*Defined in [packages/dom/source/checks.ts:13](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/dom/source/checks.ts#L13)*

**Returns:** *boolean*

___

### `Const` checkCanUseDocument

▸ **checkCanUseDocument**(): *boolean*

*Defined in [packages/dom/source/checks.ts:4](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/dom/source/checks.ts#L4)*

**Returns:** *boolean*

___

### `Const` checkCanUseHistory

▸ **checkCanUseHistory**(): *boolean*

*Defined in [packages/dom/source/checks.ts:7](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/dom/source/checks.ts#L7)*

**Returns:** *boolean*

___

### `Const` checkCanUseLocalStorage

▸ **checkCanUseLocalStorage**(): *boolean*

*Defined in [packages/dom/source/checks.ts:9](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/dom/source/checks.ts#L9)*

**Returns:** *boolean*

___

### `Const` checkCanUseLocation

▸ **checkCanUseLocation**(): *boolean*

*Defined in [packages/dom/source/checks.ts:8](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/dom/source/checks.ts#L8)*

**Returns:** *boolean*

___

### `Const` checkCanUseMatchMedia

▸ **checkCanUseMatchMedia**(): *boolean*

*Defined in [packages/dom/source/checks.ts:12](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/dom/source/checks.ts#L12)*

**Returns:** *boolean*

___

### `Const` checkCanUseNavigator

▸ **checkCanUseNavigator**(): *boolean*

*Defined in [packages/dom/source/checks.ts:5](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/dom/source/checks.ts#L5)*

**Returns:** *boolean*

___

### `Const` checkCanUseNotification

▸ **checkCanUseNotification**(): *boolean*

*Defined in [packages/dom/source/checks.ts:14](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/dom/source/checks.ts#L14)*

**Returns:** *boolean*

___

### `Const` checkCanUseServiceWorker

▸ **checkCanUseServiceWorker**(): *boolean*

*Defined in [packages/dom/source/checks.ts:6](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/dom/source/checks.ts#L6)*

**Returns:** *boolean*

___

### `Const` checkCanUseSessionStorage

▸ **checkCanUseSessionStorage**(): *boolean*

*Defined in [packages/dom/source/checks.ts:10](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/dom/source/checks.ts#L10)*

**Returns:** *boolean*

___

### `Const` checkCanUseWindow

▸ **checkCanUseWindow**(): *boolean*

*Defined in [packages/dom/source/checks.ts:3](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/dom/source/checks.ts#L3)*

**Returns:** *boolean*

___

### `Const` checkCanUseXhr

▸ **checkCanUseXhr**(): *boolean*

*Defined in [packages/dom/source/checks.ts:11](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/dom/source/checks.ts#L11)*

**Returns:** *boolean*

___

###  createDomEnv

▸ **createDomEnv**<**A**>(): *[DomEnv](../interfaces/dom.domenv.md)‹A›*

*Defined in [packages/dom/source/createDomEnv.ts:7](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/dom/source/createDomEnv.ts#L7)*

**Type parameters:**

▪ **A**

**Returns:** *[DomEnv](../interfaces/dom.domenv.md)‹A›*

___

###  createMatchMedia

▸ **createMatchMedia**(`window`: [Window](timer.md#window), `mediaType`: string): *(Anonymous function)*

*Defined in [packages/dom/source/createMatchMedia.ts:1](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/dom/source/createMatchMedia.ts#L1)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`window` | [Window](timer.md#window) | - |
`mediaType` | string | "screen" |

**Returns:** *(Anonymous function)*

___

###  createServerDomEnv

▸ **createServerDomEnv**<**A**>(`options`: [CreateServerDomEnvOptions](dom.md#createserverdomenvoptions)): *[DomEnv](../interfaces/dom.domenv.md)‹A›*

*Defined in [packages/dom/source/createServerDomEnv.ts:23](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/dom/source/createServerDomEnv.ts#L23)*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`options` | [CreateServerDomEnvOptions](dom.md#createserverdomenvoptions) | {} |

**Returns:** *[DomEnv](../interfaces/dom.domenv.md)‹A›*

___

###  handleHistoryChange

▸ **handleHistoryChange**(`window`: [Window](timer.md#window)): *(Anonymous function)*

*Defined in [packages/dom/source/createServerDomEnv.ts:100](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/dom/source/createServerDomEnv.ts#L100)*

**Parameters:**

Name | Type |
------ | ------ |
`window` | [Window](timer.md#window) |

**Returns:** *(Anonymous function)*

___

###  querySelector

▸ **querySelector**<**A**, **B**>(`cssSelector`: string, `node`: A): *[Maybe](io.md#const-maybe)‹B›*

*Defined in [packages/dom/source/querySelector.ts:3](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/dom/source/querySelector.ts#L3)*

**Type parameters:**

▪ **A**: *Element*

▪ **B**: *Element*

**Parameters:**

Name | Type |
------ | ------ |
`cssSelector` | string |
`node` | A |

**Returns:** *[Maybe](io.md#const-maybe)‹B›*

___

###  querySelectorAll

▸ **querySelectorAll**<**A**, **B**>(`cssSelector`: string, `node`: A): *keyof B[]*

*Defined in [packages/dom/source/querySelector.ts:10](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/dom/source/querySelector.ts#L10)*

**Type parameters:**

▪ **A**: *Element*

▪ **B**: *Element*

**Parameters:**

Name | Type |
------ | ------ |
`cssSelector` | string |
`node` | A |

**Returns:** *keyof B[]*
